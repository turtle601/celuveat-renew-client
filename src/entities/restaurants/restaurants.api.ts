import { PAGE_OFFSET } from '../../shared/constant/offset';
import { API_URL } from '../../shared/constant/url';

export interface RestaurantsQueryParams {
  page: number;
}

export const restaurantsQuery = async ({ page }: RestaurantsQueryParams) => {
  const response = await fetch(
    `${API_URL}/restaurants?page=${page}&offset=${PAGE_OFFSET}`
  );
  const data = await response.json();

  return data;
};
