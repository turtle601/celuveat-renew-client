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

  const mutation = (category?: string) => {
    setSearchParams(
      getQueryString({
        page: '1',
        category,
        celeb: searchParams.get('celeb'),
      })
    );
  };

  return {
    mutation,
  };
};
