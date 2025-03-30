import { useEffect } from 'react';
import ReactDOMServer from 'react-dom/server';

import { useModal } from 'ik-ui-library';

import Marker from '../../shared/ui/marker/model/marker';
import { RestaurantCard } from '../../entities/restaurants';
import RestaurantMarkerView from '../../entities/restaurants/ui/restaurantMarkerView';
import Overlay from '../../shared/ui/marker/ui/overlay';
import EventTarget from '../../shared/ui/marker/ui/eventTarget';

import { useRestaurantsMarkersStore } from '../../shared/ui/marker';

import type { Restaurant } from '../../entities/restaurants/restaurants.type';

interface RestaurantMarkerProps {
  marker: Marker<Restaurant>;
}

function RestaurantMarker({ marker }: RestaurantMarkerProps) {
  const { open } = useModal();
  const [, markersStore] = useRestaurantsMarkersStore();

  useEffect(() => {
    marker.marker.setIcon({
      content: ReactDOMServer.renderToString(
        <RestaurantMarkerView marker={marker} />
      ),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [marker.isFocus, marker.isHover]);

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
      onTap={handleTap}
      onMouseover={handleMouseover}
      onMouseout={handleMouseout}
    >
      <Overlay
        element={marker}
        view={<RestaurantMarkerView marker={marker} />}
      ></Overlay>
    </EventTarget>
  );
}

export default RestaurantMarker;
