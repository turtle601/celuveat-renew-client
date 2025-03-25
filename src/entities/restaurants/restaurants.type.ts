import type { Celebrity } from '../celebrities/celebrities.type';

export type Restaurant = {
  id: number;
  name: string;
  category: string;
  roadAddress: string;
  phoneNumber: string;
  naverMapUrl: string;
  latitude: number;
  longitude: number;
  visitedCelebrities: Celebrity[];
  imgUrl: string;
};

export type RestaurantsResponseType = {
  content: Restaurant[];
  totalPage: number;
  size: number;
};
