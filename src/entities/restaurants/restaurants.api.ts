import { PAGE_OFFSET } from '../../shared/constant/offset';
import { API_URL } from '../../shared/constant/url';
import { getQueryString } from '../../shared/lib/queryString';

export interface RestaurantsQueryParams {
  page: number;
  celeb?: string;
  category?: string;
}

export const restaurantsQuery = async ({
  page,
  celeb,
  category,
}: RestaurantsQueryParams) => {
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
