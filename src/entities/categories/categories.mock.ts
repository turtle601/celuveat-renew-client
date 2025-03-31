import { restaurantsMock } from '../restaurants/restaurants.mock';

export const getCategoriesMock = () => {
  return restaurantsMock
    .map((restaurant) => {
      return restaurant.category;
    })
    .reduce<string[]>((acc, category) => {
      if (acc.filter((v) => category === v).length === 0) {
        acc.push(category);
      }

      return acc;
    }, []);
};

export const categoryPlaceholderData = {
  content: [
    '고기',
    '면',
    '한식',
    '중식',
    '일식',
    '양식',
    '분식',
    '커피/디저트',
    '주점',
    '세계음식',
    '패스트푸드',
    '생선, 회',
  ],
};
