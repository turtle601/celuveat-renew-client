import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import {
  queryOptions as tsqQueryOptions,
  useQuery,
} from '@tanstack/react-query';

import { queryClient } from '../../shared/lib/tanstack-query';

import { useMap } from './model';
import { mapRestaurantsQuery, MapRestaurantsQueryParams } from './map.api';
import { getBoundaryParams } from './map.map';
import type { MapRestaurantsResponseType } from './map.type';
import { debounce } from '../../shared/lib/delay/debounce';

export const keys = {
  root: ['restaurant', 'map'],
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
  const [searchParams] = useSearchParams();
  const [boundary, setBoundary] = useState<
    MapRestaurantsQueryParams['boundary']
  >({
    min: {
      lat: 0,
      lng: 0,
    },
    max: {
      lat: 0,
      lng: 0,
    },
  });

  const celeb = searchParams.get('celeb') ?? undefined;
  const category = searchParams.get('category') ?? undefined;

  const setBoundaryParams = useCallback(() => {
    if (nmap) {
      const boundaryParams = getBoundaryParams(nmap.getBounds());
      setBoundary(boundaryParams);
    }
  }, [nmap]);

  const debouncedSetBoundaryFn = useCallback(() => {
    return debounce(setBoundaryParams, 200);
  }, [setBoundaryParams]);

  useEffect(() => {
    nmap?.addListener('center_changed', debouncedSetBoundaryFn);
  }, [debouncedSetBoundaryFn, nmap]);

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
