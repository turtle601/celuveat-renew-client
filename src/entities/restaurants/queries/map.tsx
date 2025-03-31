import { useSearchParams } from 'react-router';
import { useCallback, useEffect, useState } from 'react';
import {
  queryOptions as tsqQueryOptions,
  useQuery,
} from '@tanstack/react-query';

import { useMap } from '../../../shared/ui/map/model';
import { getQueryString } from '../../../shared/lib/queryString';
import { queryClient } from '../../../shared/lib/tanstack-query';

import {
  mapRestaurantMarkersQuery,
  type MapRestaurantsQueryParams,
} from '../api';
import { getBoundaryParams } from '../mapping';
import { useRestaurantsMarkersStore } from '../../../shared/ui/marker';
import Marker from '../../../shared/ui/marker/model/marker';

export const keys = {
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
      staleTime: 0,
    });
  },
};

export const useMapParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const celebParams = searchParams.get('celeb') ?? undefined;
  const categoryParams = searchParams.get('category') ?? undefined;
  const latParams = String(searchParams.get('lat') ?? 37.511337);
  const lngParams = String(searchParams.get('lng') ?? 127.012084);

  const setMapParams = ({
    celeb,
    category,
    lat,
    lng,
  }: {
    celeb?: string;
    category?: string;
    lat?: string;
    lng?: string;
  }) => {
    setSearchParams(
      getQueryString({
        celeb: celeb ?? searchParams.get('celeb'),
        category: category ?? searchParams.get('category'),
        lat: lat ?? String(searchParams.get('lat') ?? 37.511337),
        lng: lng ?? String(searchParams.get('lng') ?? 127.012084),
      })
    );
  };

  return {
    celebParams,
    categoryParams,
    latParams,
    lngParams,
    setMapParams,
  };
};

export const useMapIdle = ({ action }: { action?: () => void }) => {
  const nmap = useMap();
  const [mapBounds, setMapBounds] = useState<naver.maps.Bounds | undefined>();

  const updateBoundary = useCallback(() => {
    if (!nmap) return;

    setMapBounds(nmap.getBounds());
    action?.();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nmap]);

  useEffect(() => {
    if (!nmap) return;
    const listener = nmap.addListener('idle', updateBoundary);

    return () => nmap.removeListener(listener);
  }, [nmap, updateBoundary]);

  return { mapBounds };
};

export const useMapRestaurantsQuery = () => {
  const nmap = useMap();

  const { celebParams, categoryParams, latParams, lngParams, setMapParams } =
    useMapParams();

  // const location = useLocation();

  const setMapCenterParams = useCallback(() => {
    if (!nmap) return;

    const center = nmap.getCenter();
    const lat = String(center.y);
    const lng = String(center.x);

    setMapParams({
      lat,
      lng,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nmap]);

  const { mapBounds } = useMapIdle({ action: setMapCenterParams });

  useEffect(() => {
    nmap?.setCenter(
      new naver.maps.LatLng(Number(latParams), Number(lngParams))
    );
    // zoom level 추가

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nmap]);

  return useQuery(
    restaurantsMarkersService.queryOptions({
      celeb: celebParams,
      category: categoryParams,
      boundary: encodeURIComponent(
        JSON.stringify(getBoundaryParams(mapBounds))
      ),
    })
  );
};

export const useRestaurantMarkers = () => {
  const map = useMap();

  const { data } = useMapRestaurantsQuery();

  const [snapshot, markerStore] = useRestaurantsMarkersStore();

  useEffect(() => {
    if (data && map) {
      const markers = data.content.map((restaurant) => {
        const marker = new Marker({
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, map]);

  return {
    markerMap: snapshot.markerMap,
  };
};
