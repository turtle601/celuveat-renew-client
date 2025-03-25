import { http, HttpResponse } from 'msw';

import { restaurantsMock } from '../entities/restaurants/restaurants.mock';
import { API_URL } from '../shared/constant/url';
import { celebritiesMock } from '../entities/celebrities/celebrities.mock';
import { categoriesMock } from '../entities/categories/categories.mock';

import type { RestaurantsResponseType } from '../entities/restaurants/restaurants.type';
import type { CelebritiesResponseType } from '../entities/celebrities';
import type { CategoriesResponseType } from '../entities/categories';

export const handlers = [
  http.get(`${API_URL}/restaurants`, ({ request }) => {
    const url = new URL(request.url);
    const pageNum = Number(url.searchParams.get('page'));
    const offSetNum = Number(url.searchParams.get('offset'));

    return HttpResponse.json<RestaurantsResponseType>({
      content: restaurantsMock.slice(
        offSetNum * (pageNum - 1),
        offSetNum * (pageNum - 1) + offSetNum
      ),
      totalPage: Math.ceil(restaurantsMock.length / offSetNum),
      size: restaurantsMock.length,
    });
  }),

  http.get(`${API_URL}/celebrities`, () => {
    return HttpResponse.json<CelebritiesResponseType>(celebritiesMock);
  }),

  http.get(`${API_URL}/categories`, () => {
    return HttpResponse.json<CategoriesResponseType>(categoriesMock);
  }),
];
