import { useRestaurantMarkers } from '../../../../entities/restaurants';

import RestaurantMarker from './restaurantMarker';

function RestaurantMarkers() {
  const { markers } = useRestaurantMarkers();

  if (!markers) return;

  return (
    <>
      {markers.map((restaurantMarker) => {
        return (
          <RestaurantMarker
            key={restaurantMarker.data.id}
            restaurantMarker={restaurantMarker}
          />
        );
      })}
    </>
  );
}

export default RestaurantMarkers;
