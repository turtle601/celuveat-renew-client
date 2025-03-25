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
