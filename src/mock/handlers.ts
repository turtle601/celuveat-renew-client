import { http, HttpResponse } from 'msw';

import { API_URL } from '../shared/constant/url';

import { restaurantsMock } from './restaurants';

import type { Restaurant } from '../entities/restaurants/type';
import type { RestaurantsResponseType } from '../entities/restaurants/api/type';

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

  http.get(`${API_URL}/maps`, ({ request }) => {
    const url = new URL(request.url);

    const celeb = url.searchParams.get('celeb');

    const filteredCelebRestaurant = celeb
      ? restaurantsMock.filter((restaurant) => {
          return restaurant.visitedCelebrities.some(
            (visitedCeleb) => visitedCeleb.name === celeb
          );
        })
      : restaurantsMock;

    const category = url.searchParams.get('category');

    const filteredCategoryRestaurant = category
      ? filteredCelebRestaurant.filter((restaurant) => {
          return restaurant.category === category;
        })
      : filteredCelebRestaurant;

    const boundary = url.searchParams.get('boundary');

    const isBoundary = (restaurant: Restaurant) => {
      if (!boundary) return;

      const boundaryParams = JSON.parse(decodeURIComponent(boundary));

      return (
        restaurant.latitude > boundaryParams.min.lat &&
        restaurant.latitude < boundaryParams.max.lat &&
        restaurant.longitude > boundaryParams.min.lng &&
        restaurant.longitude < boundaryParams.max.lng
      );
    };

    const filteredRestaurant = boundary
      ? filteredCategoryRestaurant.filter(isBoundary)
      : filteredCategoryRestaurant;

    return HttpResponse.json({
      content: filteredRestaurant,
      size: filteredRestaurant.length,
    });
  }),
];
