import { useSearchParams } from 'react-router';
import {
  queryOptions as tsqQueryOptions,
  useSuspenseQuery,
} from '@tanstack/react-query';

import { queryClient } from '../../shared/lib/tanstack-query';
import { restaurantsQuery, RestaurantsQueryParams } from './restaurants.api';

import type { RestaurantsResponseType } from './restaurants.type';
import { getQueryString } from '../../shared/lib/queryString';

export const keys = {
  root: ['restaurant'],
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
  const [searchParams] = useSearchParams();

  const page = Number(searchParams.get('page') ?? '1');
  const celeb = searchParams.get('celeb') ?? undefined;
  const category = searchParams.get('category') ?? undefined;

  return useSuspenseQuery(
    restaurantsService.queryOptions({
      page,
      celeb,
      category,
    })
  );
};

export const useRestaurantPageMutation = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const celebParams = searchParams.get('celeb') ?? undefined;
  const categoryParams = searchParams.get('category') ?? undefined;

  const mutation = (pageNum: number) => {
    setSearchParams(
      getQueryString({
        category: categoryParams,
        celeb: celebParams,
        page: pageNum.toString(),
      })
    );
  };

  const prevPageMutation = () => {
    const page = Number(searchParams.get('page') ?? '1');

    mutation(page - 1);
  };

  const nextPageMutation = () => {
    const page = Number(searchParams.get('page') ?? '1');

    mutation(page + 1);
  };

  return {
    mutation,
    prevPageMutation,
    nextPageMutation,
  };
};
