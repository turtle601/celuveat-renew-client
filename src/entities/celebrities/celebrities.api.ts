import { API_URL } from '../../shared/constant/url';

export const celebritiesQuery = async () => {
  const response = await fetch(`${API_URL}/celebrities`);
  const data = await response.json();

  return data;
};
