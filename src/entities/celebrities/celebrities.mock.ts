import { restaurantsMock } from '../restaurants/restaurants.mock';

import type { Celebrity } from './celebrities.type';

export const getCelebritiesMock = () => {
  return restaurantsMock
    .flatMap((restaurant) => {
      return restaurant.visitedCelebrities;
    })
    .reduce<Celebrity[]>((acc, celeb) => {
      if (acc.filter((v) => celeb.name === v.name).length === 0) {
        acc.push(celeb);
      }

      return acc;
    }, []);
};
