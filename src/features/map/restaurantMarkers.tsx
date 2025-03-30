import { useMapRestaurantsMarkers } from '../../entities/map';

import RestaurantMarker from './restaurantMarker';

function RestaurantMarkers() {
  const { markerMap } = useMapRestaurantsMarkers();

  if (!markerMap) return;

  return (
    <>
      {Object.values(markerMap).map((marker) => {
        return <RestaurantMarker key={marker.id} marker={marker} />;
      })}
    </>
  );
}

export default RestaurantMarkers;
