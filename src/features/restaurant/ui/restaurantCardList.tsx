import { Flex } from 'ik-ui-library';
import { recommendationRestaurants } from '../../../entities/restaurant/model/recommendationRestaurant';

import RecommendRestaurantCard from '../../../entities/restaurant/ui/restaurantCard';

function RestaurantCardList() {
  return (
    <Flex as="ul" gap="1rem" etcStyles={{ flexWrap: 'wrap' }}>
      {recommendationRestaurants.map((restaurant) => {
        return (
          <RecommendRestaurantCard
            key={restaurant.id}
            restaurant={restaurant}
          />
        );
      })}
    </Flex>
  );
}

export default RestaurantCardList;
