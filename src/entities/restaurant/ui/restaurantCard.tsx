import { ComponentPropsWithoutRef } from 'react';
import { css } from '@emotion/react';

import { Restaurant } from '../model/recommendationRestaurant';
import RestaurantImage from './restaurantImage';

interface RestaurantCardProps extends ComponentPropsWithoutRef<'li'> {
  restaurant: Restaurant;
}

function RestaurantCard({ restaurant, ...attribute }: RestaurantCardProps) {
  return (
    <li
      {...attribute}
      css={css({
        width: '200px',
        height: '300px',
        cursor: 'pointer',
        border: '1px solid #EEE',
        borderRadius: '10px',
      })}
    >
      <RestaurantImage
        width={'200px'}
        height={'200px'}
        imageUrl={restaurant.image.name}
        author={restaurant.image.author}
        sns={restaurant.image.sns}
      />
      <div>{restaurant.name}</div>
      <div>{restaurant.roadAddress}</div>
      <div>{restaurant.celebs[0].name} 추천</div>
    </li>
  );
}

export default RestaurantCard;
