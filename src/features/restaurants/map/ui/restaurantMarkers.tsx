import RestaurantMarker from './restaurantMarker';

import { useRestaurantMarkers } from '../../../../entities/restaurants';

function RestaurantMarkers() {
  const { markerMap } = useRestaurantMarkers();

  if (!markerMap) return;

  return (
    <>
      {Object.values(markerMap).map((marker) => (
        <RestaurantMarker key={marker.id} markerModel={marker} />
      ))}
    </>
  );
}

export default RestaurantMarkers;
