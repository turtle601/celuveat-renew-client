import type { Celebrity } from '../../celebrities';

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
