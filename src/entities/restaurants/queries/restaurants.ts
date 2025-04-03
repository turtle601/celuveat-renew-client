import {
  queryOptions as tsqQueryOptions,
  useSuspenseQuery,
} from '@tanstack/react-query';

import { restaurantsQuery } from '../api';

import { useCustomSearchParams } from '../../../shared/hooks';

import { queryClient } from '../../../shared/lib/tanstack-query';

import type {
  RestaurantsQueryParams,
  RestaurantsResponseType,
} from '../api/type';

const keys = {
  root: ['restaurants'],
  queryParams: (params: RestaurantsQueryParams) => {
    return { ...params };
  },
} as const;

export const restaurantsService = {
  queryKey: (params: RestaurantsQueryParams) => [
    ...keys.root,
    keys.queryParams(params),
  ],
  invalidateCache: async (params: RestaurantsQueryParams) =>
    await queryClient.invalidateQueries({
      queryKey: restaurantsService.queryKey(params),
    }),
  cancelCache: async (params: RestaurantsQueryParams) =>
    await queryClient.cancelQueries({
      queryKey: restaurantsService.queryKey(params),
    }),
  queryOptions: (params: RestaurantsQueryParams) => {
    return tsqQueryOptions<RestaurantsResponseType>({
      queryKey: restaurantsService.queryKey(params),
      queryFn: () => restaurantsQuery(params),
      staleTime: 500,
    });
  },
};

export const useRestaurantsQuery = () => {
  const { searchParams } = useCustomSearchParams();

  return useSuspenseQuery(
    restaurantsService.queryOptions({
      page: Number(searchParams['page'] ?? '1'),
      celeb: searchParams['celeb'],
      category: searchParams['category'],
    })
  );
};

export const useRestaurantPageMutation = () => {
  const { searchParams, setSearchParams } = useCustomSearchParams();

  const mutation = (pageNum: number) => {
    setSearchParams({
      page: pageNum.toString(),
    });
  };

  const prevPageMutation = () => {
    const page = Number(searchParams['page'] ?? '1');

    mutation(page - 1);
  };

  const nextPageMutation = () => {
    const page = Number(searchParams['page'] ?? '1');

    mutation(page + 1);
  };

  return {
    mutation,
    prevPageMutation,
    nextPageMutation,
  };
};
