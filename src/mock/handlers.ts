import { http, HttpResponse } from 'msw';

import { restaurantsMock } from '../entities/restaurants/restaurants.mock';
import { API_URL } from '../shared/constant/url';
import { RestaurantsResponseType } from '../entities/restaurants/restaurants.type';

export const handlers = [
  http.get(`${API_URL}/restaurants`, () => {
    return HttpResponse.json<RestaurantsResponseType>(restaurantsMock);
  }),
];
