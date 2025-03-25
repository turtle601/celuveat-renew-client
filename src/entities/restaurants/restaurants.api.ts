import { PAGE_OFFSET } from '../../shared/constant/offset';
import { API_URL } from '../../shared/constant/url';

export interface RestaurantsQueryParams {
  page: number;
  celeb?: string;
}

export const restaurantsQuery = async ({
  page,
  celeb,
}: RestaurantsQueryParams) => {
  const response = await fetch(
    `${API_URL}/restaurants?page=${page}&offset=${PAGE_OFFSET}&celeb=${celeb}`
  );
  const data = await response.json();

  return data;
};
