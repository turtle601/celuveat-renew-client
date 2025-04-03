import { useModal } from 'ik-ui-library';

import Marker from '../../shared/ui/marker/model/marker';

import { RestaurantCard } from '../../entities/restaurants';

import {
  EventTarget,
  useRestaurantsMarkersStore,
} from '../../shared/ui/marker';

import type { Restaurant } from '../../entities/restaurants/type';

interface RestaurantMarkerProps {
  marker: Marker<Restaurant>;
}

function RestaurantMarker({ marker }: RestaurantMarkerProps) {
  const { open } = useModal();

  const [, markersStore] = useRestaurantsMarkersStore();

  const handleClick = () => {
    open(<RestaurantCard restaurant={marker.data} />);
    markersStore.focus(marker.id);
  };

  const handleMouseover = () => {
    markersStore.hover(marker.id);
  };

  const handleMouseout = () => {
    markersStore.notHover(marker.id);
  };

  const handleTap = () => {
    if (marker.isHover) {
      markersStore.notHover(marker.id);
    } else {
      markersStore.hover(marker.id);
    }
  };

  return (
    <EventTarget
      element={marker}
      onClick={handleClick}
      onMouseover={handleMouseover}
      onMouseout={handleMouseout}
      onTap={handleTap}
    ></EventTarget>
  );
}

export default RestaurantMarker;
