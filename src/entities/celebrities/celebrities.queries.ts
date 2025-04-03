import { queryClient } from '../../shared/lib/tanstack-query';

import {
  queryOptions as tsqQueryOptions,
  useQuery,
} from '@tanstack/react-query';

import { useCustomSearchParams } from '../../shared/hooks';

import { celebritiesQuery } from './celebrities.api';
import { celebPlaceholderData } from '../../mock/celebrities';

import type { CelebritiesResponseType } from './celebrities.type';

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
      placeholderData: celebPlaceholderData,
    });
  },
};

export const useCelebritiesQuery = () => {
  return useQuery(celebritiesService.queryOptions());
};

export const useFilterCelebMutation = () => {
  const { setSearchParams } = useCustomSearchParams();

  const restaurantMutation = (celeb?: string) => {
    setSearchParams({
      page: '1',
      celeb: celeb,
    });
  };

  const mapMutation = (celeb?: string) => {
    setSearchParams({
      celeb,
    });
  };

  const filter = (celeb?: string) => {
    if (location.pathname === '/restaurants' || location.pathname === '/') {
      restaurantMutation(celeb);
    } else if (location.pathname === '/map') {
      mapMutation(celeb);
    }
  };

  return {
    filter,
  };
};
