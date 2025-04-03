import type { Restaurant } from '../type';

export interface MapRestaurantsQueryParams {
  celeb?: string;
  category?: string;
  boundary?: string;
}

export interface MapRestaurantsQueryResponse {
  content: Restaurant[];
  size: number;
}

export type RestaurantsResponseType = {
  content: Restaurant[];
  totalPage: number;
  size: number;
};

export interface RestaurantsQueryParams {
  page: number;
  celeb?: string;
  category?: string;
}
