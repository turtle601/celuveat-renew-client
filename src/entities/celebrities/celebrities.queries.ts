import { queryClient } from '../../shared/lib/tanstack-query';

import {
  queryOptions as tsqQueryOptions,
  useSuspenseQuery,
} from '@tanstack/react-query';

import { celebritiesQuery } from './celebrities.api';

import type { CelebritiesResponseType } from './celebrities.type';
import { useSearchParams } from 'react-router';
import { getQueryString } from '../../shared/lib/queryString';

export const keys = {
  root: ['celebrities'],
} as const;

export const celebritiesService = {
  queryKey: () => [keys.root],
  invalidateCache: async () =>
    await queryClient.invalidateQueries({
      queryKey: celebritiesService.queryKey(),
    }),
  cancelCache: async () =>
    await queryClient.cancelQueries({
      queryKey: celebritiesService.queryKey(),
    }),
  queryOptions: () => {
    return tsqQueryOptions<CelebritiesResponseType>({
      queryKey: celebritiesService.queryKey(),
      queryFn: celebritiesQuery,
    });
  },
};

export const useCelebritiesQuery = () => {
  return useSuspenseQuery(celebritiesService.queryOptions());
};

export const useFilterCelebMutation = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const mutation = (celebName?: string) => {
    setSearchParams(
      getQueryString({
        page: '1',
        category: searchParams.get('category'),
        celeb: celebName,
      })
    );
  };

  return {
    mutation,
  };
};
