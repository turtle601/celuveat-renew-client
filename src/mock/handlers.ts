import { http, HttpResponse } from 'msw';

import { API_URL } from '../shared/constant/url';

import { restaurantsMock } from '../entities/restaurants/restaurants.mock';

import { getCelebritiesMock } from '../entities/celebrities/celebrities.mock';
import { getCategoriesMock } from '../entities/categories/categories.mock';

import type { RestaurantsResponseType } from '../entities/restaurants/restaurants.type';
import type { CelebritiesResponseType } from '../entities/celebrities';
import type { CategoriesResponseType } from '../entities/categories';

export const handlers = [
  http.get(`${API_URL}/restaurants`, ({ request }) => {
    const url = new URL(request.url);
    const pageNum = Number(url.searchParams.get('page'));
    const offSetNum = Number(url.searchParams.get('offset'));

    const celeb = url.searchParams.get('celeb');

    const filteredCelebRestaurant = celeb
      ? restaurantsMock.filter((restaurant) => {
          return restaurant.visitedCelebrities.some(
            (visitedCeleb) => visitedCeleb.name === celeb
          );
        })
      : restaurantsMock;

    const category = url.searchParams.get('category');

    const filteredRestaurant = category
      ? filteredCelebRestaurant.filter((restaurant) => {
          return restaurant.category === category;
        })
      : filteredCelebRestaurant;

    return HttpResponse.json<RestaurantsResponseType>({
      content: filteredRestaurant.slice(
        offSetNum * (pageNum - 1),
        offSetNum * (pageNum - 1) + offSetNum
      ),
      totalPage: Math.ceil(filteredRestaurant.length / offSetNum),
      size: filteredRestaurant.length,
    });
  }),

  http.get(`${API_URL}/celebrities`, () => {
    return HttpResponse.json<CelebritiesResponseType>({
      content: getCelebritiesMock(),
    });
  }),

  http.get(`${API_URL}/categories`, () => {
    return HttpResponse.json<CategoriesResponseType>({
      content: getCategoriesMock(),
    });
  }),
];
