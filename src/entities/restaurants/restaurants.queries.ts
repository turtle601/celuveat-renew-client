import { queryClient } from '../../shared/lib/tanstack-query';

import {
  queryOptions as tsqQueryOptions,
  useSuspenseQuery,
} from '@tanstack/react-query';

import { restaurantsQuery } from './restaurants.api';
import { RestaurantsResponseType } from './restaurants.type';

export const keys = {
  root: ['restaurant'],
} as const;

export const restaurantsService = {
  queryKey: () => [keys.root],
  invalidateCache: async () =>
    await queryClient.invalidateQueries({
      queryKey: restaurantsService.queryKey(),
    }),
  cancelCache: async () =>
    await queryClient.cancelQueries({
      queryKey: restaurantsService.queryKey(),
    }),
  queryOptions: () => {
    return tsqQueryOptions<RestaurantsResponseType>({
      queryKey: restaurantsService.queryKey(),
      queryFn: restaurantsQuery,
    });
  },
};

export const useRestaurantsQuery = () => {
  return useSuspenseQuery(restaurantsService.queryOptions());
};
