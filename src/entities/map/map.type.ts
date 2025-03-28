import type { Restaurant } from '../restaurants/restaurants.type';

export type MapRestaurantsResponseType = {
  content: Restaurant[];
  size: number;
};
