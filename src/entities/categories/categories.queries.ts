import { queryClient } from '../../shared/lib/tanstack-query';

import {
  queryOptions as tsqQueryOptions,
  useSuspenseQuery,
} from '@tanstack/react-query';

import { useSearchParams } from 'react-router';
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
  const [searchParams, setSearchParams] = useSearchParams();

  const mutation = (category: string | undefined) => {
    setSearchParams({
      ...searchParams,
      page: '1',
      category,
    });
  };

  return {
    mutation,
  };
};
