import { API_URL } from '../../shared/constant/url';

export const categoriesQuery = async () => {
  const response = await fetch(`${API_URL}/categories`);
  const data = await response.json();

  return data;
};
