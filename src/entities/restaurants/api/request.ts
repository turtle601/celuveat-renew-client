import { API_URL } from '../../../shared/constant/url';
import { getQueryString } from '../../../shared/lib/queryString';

import type { Restaurant } from '../restaurants.type';

export interface MapRestaurantsQueryParams {
  celeb?: string;
  category?: string;
  boundary?: string;
}

export interface MapRestaurantsQueryResponse {
  content: Restaurant[];
  size: number;
}

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
