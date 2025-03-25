import { PAGE_OFFSET } from '../../shared/constant/offset';
import { API_URL } from '../../shared/constant/url';

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
  const celebQueryString = celeb ? `&celeb=${celeb}` : '';
  const categoryQueryString = category ? `&category=${category}` : '';

  const response = await fetch(
    `${API_URL}/restaurants?page=${page}&offset=${PAGE_OFFSET}${celebQueryString}${categoryQueryString}`
  );

  const data = await response.json();

  return data;
};
