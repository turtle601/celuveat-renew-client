import { useRestaurantsQuery } from '../../entities/restaurants';

import { RestaurantMarker } from '../../entities/restaurants/ui';

function RestaurantMarkers() {
  const { data: restaurantsData } = useRestaurantsQuery();

  return (
    <div>
      {restaurantsData.content.map((restaurant) => {
        return <RestaurantMarker key={restaurant.id} restaurant={restaurant} />;
      })}
    </div>
  );
}

export default RestaurantMarkers;
