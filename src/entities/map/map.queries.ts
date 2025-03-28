import { useCallback, useEffect } from 'react';
import { useSearchParams } from 'react-router';
import {
  queryOptions as tsqQueryOptions,
  useQuery,
} from '@tanstack/react-query';

import { queryClient } from '../../shared/lib/tanstack-query';

import { useMap } from './model';
import { mapRestaurantsQuery, MapRestaurantsQueryParams } from './map.api';
import { getBoundaryParams } from './map.map';
import { debounce } from '../../shared/lib/delay/debounce';

import type { MapRestaurantsResponseType } from './map.type';
import { getQueryString } from '../../shared/lib/queryString';

export const keys = {
  root: ['maps'],
  queryParams: (params: MapRestaurantsQueryParams) => {
    return { ...params };
  },
} as const;

export const mapRestaurantsService = {
  queryKey: (params: MapRestaurantsQueryParams) => [
    ...keys.root,
    keys.queryParams(params),
  ],
  invalidateCache: async (params: MapRestaurantsQueryParams) =>
    await queryClient.invalidateQueries({
      queryKey: mapRestaurantsService.queryKey(params),
    }),
  cancelCache: async (params: MapRestaurantsQueryParams) =>
    await queryClient.cancelQueries({
      queryKey: mapRestaurantsService.queryKey(params),
    }),
  queryOptions: (params: MapRestaurantsQueryParams) => {
    return tsqQueryOptions<MapRestaurantsResponseType>({
      queryKey: mapRestaurantsService.queryKey(params),
      queryFn: () => mapRestaurantsQuery(params),
      placeholderData: (previousData) => previousData,
    });
  },
};

export const useMapRestaurantsQuery = () => {
  const nmap = useMap();

  const [searchParams, setSearchParams] = useSearchParams();

  const celeb = searchParams.get('celeb') ?? undefined;
  const category = searchParams.get('category') ?? undefined;
  const boundary = searchParams.get('boudary') ?? undefined;

  const setBoundaryParams = useCallback(() => {
    if (nmap) {
      const boundaryParams = getBoundaryParams(nmap.getBounds());

      setSearchParams(
        getQueryString({
          celeb,
          category,
          boundary: JSON.stringify(boundaryParams),
        })
      );
    }
  }, [category, celeb, nmap, setSearchParams]);

  const debouncedSetBoundaryFn = useCallback(() => {
    return debounce(setBoundaryParams, 200);
  }, [setBoundaryParams]);

  useEffect(() => {
    nmap?.addListener('center_changed', debouncedSetBoundaryFn);
  }, [debouncedSetBoundaryFn, nmap]);

  useEffect(() => {
    nmap?.addListener('click', () => {
      console.log('이거');
    });
  }, [nmap]);

  useEffect(() => {
    setBoundaryParams();
  }, [setBoundaryParams]);

  return useQuery(
    mapRestaurantsService.queryOptions({
      celeb,
      category,
      boundary,
    })
  );
};
