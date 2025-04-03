import { PAGE_OFFSET } from '../../../shared/constant/offset';
import { API_URL } from '../../../shared/constant/url';
import { getQueryString } from '../../../shared/lib/queryString';

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
  const queryString = getQueryString({
    celeb,
    category,
    boundary,
  }).toString();

  const response = await fetch(`${API_URL}/maps?${queryString}`);

  const data = await response.json();

  return data;
};

export const restaurantsQuery = async ({
  page,
  celeb,
  category,
}: RestaurantsQueryParams): Promise<RestaurantsResponseType> => {
  const queryString = getQueryString({
    page: String(page),
    offset: String(PAGE_OFFSET),
    celeb,
    category,
  }).toString();

  const response = await fetch(`${API_URL}/restaurants?${queryString}`);

  const data = await response.json();

  return data;
};
