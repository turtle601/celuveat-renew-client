import { useCallback, useEffect, useState } from 'react';
import {
  queryOptions as tsqQueryOptions,
  useSuspenseQuery,
} from '@tanstack/react-query';

import { useMap } from '../../../shared/ui/map/model';
import { queryClient } from '../../../shared/lib/tanstack-query';
import { DEFAULT_COODINATE } from '../../../shared/constant/map';
import { MarkerModel } from '../../../shared/ui/marker';
import { useCustomSearchParams } from '../../../shared/hooks';

import { getBoundaryParams } from '../mapping';

import { mapRestaurantMarkersQuery } from '../api';

import type { MapRestaurantsQueryParams } from '../api/type';
import { useRestaurantMarkersStore } from '../store';

const keys = {
  root: ['map'],
  searchParams: (params: MapRestaurantsQueryParams) => {
    return { ...params };
  },
} as const;

export const restaurantsMarkersService = {
  queryKey: (params: MapRestaurantsQueryParams) => [
    ...keys.root,
    keys.searchParams(params),
  ],
  invalidateCache: async (params: MapRestaurantsQueryParams) =>
    await queryClient.invalidateQueries({
      queryKey: restaurantsMarkersService.queryKey(params),
    }),
  cancelCache: async (params: MapRestaurantsQueryParams) =>
    await queryClient.cancelQueries({
      queryKey: restaurantsMarkersService.queryKey(params),
    }),
  queryOptions: (params: MapRestaurantsQueryParams) => {
    return tsqQueryOptions({
      queryKey: restaurantsMarkersService.queryKey(params),
      queryFn: () => mapRestaurantMarkersQuery(params),
      placeholderData: (previousData) => previousData,
      staleTime: 500,
    });
  },
};

export const useMapIdle = ({ action }: { action?: () => void }) => {
  const nmap = useMap();
  const [mapBounds, setMapBounds] = useState<naver.maps.Bounds | undefined>();

  const updateBoundary = useCallback(() => {
    if (!nmap) return;

    setMapBounds(nmap.getBounds());
    action?.();
  }, [action, nmap]);

  useEffect(() => {
    if (!nmap) return;
    const listener = nmap.addListener('idle', updateBoundary);

    return () => nmap.removeListener(listener);
  }, [nmap, updateBoundary]);

  return { mapBounds };
};

export const useMapRestaurantsQuery = () => {
  const nmap = useMap();

  const { searchParams, setSearchParams } = useCustomSearchParams();

  const setMapCenterParams = useCallback(() => {
    if (!nmap) return;

    const center = nmap.getCenter();
    const lat = String(center.y);
    const lng = String(center.x);

    setSearchParams({
      lat,
      lng,
    });
  }, [nmap, setSearchParams]);

  const { mapBounds } = useMapIdle({ action: setMapCenterParams });

  useEffect(() => {
    nmap?.setCenter(
      new naver.maps.LatLng(
        Number(searchParams['lat'] ?? DEFAULT_COODINATE.lat),
        Number(searchParams['lng'] ?? DEFAULT_COODINATE.lng)
      )
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nmap]);

  return useSuspenseQuery(
    restaurantsMarkersService.queryOptions({
      celeb: searchParams['celeb'],
      category: searchParams['category'],
      boundary: encodeURIComponent(
        JSON.stringify(getBoundaryParams(mapBounds))
      ),
    })
  );
};

export const useRestaurantMarkers = () => {
  const map = useMap();

  const { data } = useMapRestaurantsQuery();

  const [snapshot, markerStore] = useRestaurantMarkersStore();

  useEffect(() => {
    if (data && map) {
      const markers = data.content.map((restaurant) => {
        const marker = new MarkerModel({
          marker: new naver.maps.Marker({
            position: new naver.maps.LatLng(
              restaurant.latitude,
              restaurant.longitude
            ),
          }),
          data: restaurant,
          id: restaurant.id,
        });

        return marker;
      });

      markerStore.set(markers);
    }
  }, [data, map, markerStore]);

  return {
    markerMap: snapshot.markerMap,
  };
};
