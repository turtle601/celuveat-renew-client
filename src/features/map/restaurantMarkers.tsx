import { RestaurantMarker } from '../../entities/restaurants/ui';

import { useMapRestaurantsQuery } from '../../entities/map';

function RestaurantMarkers() {
  const { data: mapRestaurantsData } = useMapRestaurantsQuery();

  return (
    <div>
      {mapRestaurantsData?.content.map((restaurant) => {
        return <RestaurantMarker key={restaurant.id} restaurant={restaurant} />;
      })}
    </div>
  );
}

export default RestaurantMarkers;
