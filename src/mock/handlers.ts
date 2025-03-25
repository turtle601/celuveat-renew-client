import { http, HttpResponse } from 'msw';

import { restaurantsMock } from '../entities/restaurants/restaurants.mock';
import { API_URL } from '../shared/constant/url';
import { RestaurantsResponseType } from '../entities/restaurants/restaurants.type';
import { CelebritiesResponseType } from '../entities/celebrities';
import { celebritiesMock } from '../entities/celebrities/celebrities.mock';

export const handlers = [
  http.get(`${API_URL}/restaurants`, () => {
    return HttpResponse.json<RestaurantsResponseType>(restaurantsMock);
  }),

  http.get(`${API_URL}/celebrities`, () => {
    return HttpResponse.json<CelebritiesResponseType>(celebritiesMock);
  }),
];
