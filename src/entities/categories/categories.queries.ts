import { queryClient } from '../../shared/lib/tanstack-query';

import {
  queryOptions as tsqQueryOptions,
  useSuspenseQuery,
} from '@tanstack/react-query';

import { useSearchParams } from 'react-router';
import { categoriesQuery } from './categories.api';

import type { CategoriesResponseType } from './categories.type';
import { getQueryString } from '../../shared/lib/queryString';

export const keys = {
  root: ['categories'],
} as const;

export const categoriesService = {
  queryKey: () => [keys.root],
  invalidateCache: async () =>
    await queryClient.invalidateQueries({
      queryKey: categoriesService.queryKey(),
    }),
  cancelCache: async () =>
    await queryClient.cancelQueries({
      queryKey: categoriesService.queryKey(),
    }),
  queryOptions: () => {
    return tsqQueryOptions<CategoriesResponseType>({
      queryKey: categoriesService.queryKey(),
      queryFn: categoriesQuery,
    });
  },
};

export const useCategoriesQuery = () => {
  return useSuspenseQuery(categoriesService.queryOptions());
};

export const useFilterCategoryMutation = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const celebParams = searchParams.get('celeb') ?? undefined;
  const latParams = String(searchParams.get('lat') ?? 37.511337);
  const lngParams = String(searchParams.get('lng') ?? 127.012084);

  const restaurantMutation = (category?: string) => {
    setSearchParams(
      getQueryString({
        page: '1',
        category: category,
        celeb: celebParams,
      })
    );
  };

  const mapMutation = (category?: string) => {
    setSearchParams(
      getQueryString({
        celeb: celebParams,
        category: category,
        lat: latParams,
        lng: lngParams,
      })
    );
  };

  const filter = (category?: string) => {
    if (location.pathname === '/restaurants' || location.pathname === '/') {
      restaurantMutation(category);
    } else if (location.pathname === '/map') {
      mapMutation(category);
    }
  };

  return {
    filter,
  };
};
