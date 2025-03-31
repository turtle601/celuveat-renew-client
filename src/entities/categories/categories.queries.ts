import { queryClient } from '../../shared/lib/tanstack-query';

import {
  queryOptions as tsqQueryOptions,
  useSuspenseQuery,
} from '@tanstack/react-query';

import { useCustomSearchParams } from '../../shared/hooks';

import { categoriesQuery } from './categories.api';

import type { CategoriesResponseType } from './categories.type';

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
  const { setSearchParams } = useCustomSearchParams();

  const restaurantMutation = (category?: string) => {
    setSearchParams({
      page: '1',
      category,
    });
  };

  const mapMutation = (category?: string) => {
    setSearchParams({
      category: category,
    });
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
