import { useCallback, useEffect } from 'react';
import { useSearchParams } from 'react-router';
import {
  queryOptions as tsqQueryOptions,
  useQuery,
} from '@tanstack/react-query';

import { queryClient } from '../../shared/lib/tanstack-query';

import { useMap } from '../../shared/ui/map/model';
import { mapRestaurantsQuery, MapRestaurantsQueryParams } from './map.api';
import { getBoundaryParams } from './map.map';
import { debounce } from '../../shared/lib/delay/debounce';

import type { MapRestaurantsResponseType } from './map.type';
import { getQueryString } from '../../shared/lib/queryString';

import Marker from '../../shared/ui/marker/model/marker';
import { useRestaurantsMarkersStore } from '../../shared/ui/marker';

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
      // placeholderData: (previousData) => previousData,
      staleTime: 0,
    });
  },
};

export const useMapRestaurantsQuery = () => {
  const nmap = useMap();

  const [searchParams, setSearchParams] = useSearchParams();

  const celeb = searchParams.get('celeb') ?? undefined;
  const category = searchParams.get('category') ?? undefined;
  const boundary = searchParams.get('boundary') ?? undefined;

  const setBoundaryParams = useCallback(() => {
    if (nmap) {
      const boundaryParams = getBoundaryParams(nmap.getBounds());

      setSearchParams(
        getQueryString({
          celeb,
          category,
          boundary: encodeURIComponent(JSON.stringify(boundaryParams)),
        })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nmap]);

  const debouncedSetBoundaryFn = debounce(() => {
    setBoundaryParams();
  });

  useEffect(() => {
    nmap?.addListener('center_changed', () => {
      debouncedSetBoundaryFn();
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nmap]);

  useEffect(() => {
    setBoundaryParams();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nmap]);

  return useQuery(
    mapRestaurantsService.queryOptions({
      celeb,
      category,
      boundary,
    })
  );
};

export const useMapRestaurantsMarkers = () => {
  const nmap = useMap();

  const { data } = useMapRestaurantsQuery();
  const [snapshot, markersStore] = useRestaurantsMarkersStore();

  useEffect(() => {
    if (data && nmap) {
      const markers = data.content
        .filter((restaurant) => {
          const element = snapshot.markerMap?.[restaurant.id];
          return !element;
        })
        .map((restaurant) => {
          const marker = new Marker({
            marker: new naver.maps.Marker({
              position: new naver.maps.LatLng(
                restaurant.latitude,
                restaurant.longitude
              ),
            }),
            id: restaurant.id,
            data: restaurant,
          });

          return marker;
        });

      markersStore.add(markers);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, nmap]);

  return {
    markerMap: snapshot.markerMap,
  };
};
