import { API_URL } from '../../shared/constant/url';

import { getQueryString } from '../../shared/lib/queryString';

export interface MapRestaurantsQueryParams {
  celeb?: string;
  category?: string;
  boundary?: string;
}

export const mapRestaurantsQuery = async ({
  celeb,
  category,
  boundary,
}: MapRestaurantsQueryParams) => {
  const queryString = getQueryString({
    celeb,
    category,
    boundary,
  }).toString();

  const response = await fetch(`${API_URL}/maps?${queryString}`);

  const data = await response.json();

  return data;
};
