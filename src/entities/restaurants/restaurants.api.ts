import { API_URL } from '../../shared/constant/url';

export const restaurantsQuery = async () => {
  const response = await fetch(`${API_URL}/restaurants`);
  const data = await response.json();

  return data;
};
