import { useRestaurantMarkers } from '../../../../entities/restaurants';

import RestaurantMarker from './restaurantMarker';

function RestaurantMarkers() {
  const { markers: restaurantMarkers } = useRestaurantMarkers();

  if (!restaurantMarkers) return;

  return (
    <>
      {restaurantMarkers.map((restaurantMarker) => {
        return (
          <RestaurantMarker
            key={restaurantMarker.id}
            restaurantMarker={restaurantMarker}
          />
        );
      })}
    </>
  );
}

export default RestaurantMarkers;
