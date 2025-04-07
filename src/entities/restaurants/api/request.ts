import { PAGE_OFFSET } from '../../../shared/constant/offset';
import { API_URL } from '../../../shared/constant/url';
import { getQueryString } from '../../../shared/lib/queryString';
import { requestAPI } from '../../../shared/lib/request';

import type {
  MapRestaurantsQueryParams,
  MapRestaurantsQueryResponse,
  RestaurantsQueryParams,
  RestaurantsResponseType,
} from './type';

export const mapRestaurantMarkersQuery = async ({
  celeb,
  category,
  boundary,
}: MapRestaurantsQueryParams): Promise<MapRestaurantsQueryResponse> => {
  return await requestAPI(
    `${API_URL}/maps`,
    getQueryString({
      celeb,
      category,
      boundary,
    })
  );
};

export const restaurantsQuery = async ({
  page,
  celeb,
  category,
}: RestaurantsQueryParams): Promise<RestaurantsResponseType> => {
  return await requestAPI(
    `${API_URL}/restaurants`,
    getQueryString({
      page: String(page),
      offset: String(PAGE_OFFSET),
      celeb,
      category,
    })
  );
};
