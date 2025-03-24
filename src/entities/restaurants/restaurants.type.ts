export type Celebrity = {
  id: number;
  name: string;
  profileImageUrl: string;
};

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
  currentPage: number;
  hasNext: boolean;
  size: number;
};
