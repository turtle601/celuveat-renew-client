import { useCallback, useEffect, useState } from 'react';
import {
  queryOptions as tsqQueryOptions,
  useSuspenseQuery,
} from '@tanstack/react-query';

import { useMap } from '../../../shared/ui/map/model';
import { queryClient } from '../../../shared/lib/tanstack-query';
import { DEFAULT_COODINATE } from '../../../shared/constant/map';
import { useCustomSearchParams } from '../../../shared/hooks';

import { mapRestaurantMarkersQuery } from '../api';
import { useRestaurantMarkersStore } from '../store';
import { getBoundaryParams } from '../mapping';
import { RestaurantCard } from '../ui';
import { useModal } from 'ik-ui-library';

import type { Restaurant } from '../type';
import type { MapRestaurantsQueryParams } from '../api/type';

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

    setSearchParams({
      lat: String(center.y),
      lng: String(center.x),
      zoom: String(nmap.getZoom()),
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

    nmap?.setZoom(Number(searchParams['zoom'] ?? DEFAULT_COODINATE.zoom));

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

export const useInitializeMarkerStore = (
  restaurants?: Restaurant[],
  focusId?: string
) => {
  const map = useMap();
  const [snapshot, markerStore] = useRestaurantMarkersStore();

  useEffect(() => {
    if (restaurants && map) {
      const markersModel = restaurants.map((restaurant) => ({
        id: restaurant.id,
        data: restaurant,
        isFocus: focusId === restaurant.id.toString(),
        isHover: false,
      }));

      markerStore.setMarkers(markersModel);
    }
  }, [focusId, map, markerStore, restaurants]);

  return {
    markers: snapshot.markerData,
  };
};

export const useRestaurantFocusModal = (
  restaurants?: Restaurant[],
  focusId?: string
) => {
  const { open, close } = useModal();

  const restaurant = restaurants?.find((item) => item.id === Number(focusId));

  useEffect(() => {
    if (focusId) {
      if (restaurant) open(<RestaurantCard restaurant={restaurant} />);
    } else {
      close();
    }
  }, [close, focusId, open, restaurant]);
};

export const useRestaurantMarkers = () => {
  const { data } = useMapRestaurantsQuery();
  const { searchParams } = useCustomSearchParams();
  const { markers } = useInitializeMarkerStore(
    data.content,
    searchParams['focusId']
  );

  // 2) focusId 모달 로직
  useRestaurantFocusModal(data.content, searchParams['focusId']);

  return {
    markers,
  };
};
