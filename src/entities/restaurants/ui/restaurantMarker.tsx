import { useCallback } from 'react';
import ReactDOMServer from 'react-dom/server';
import { useModal } from 'ik-ui-library';

import { Marker } from '../../map/ui';

import RestaurantCard from './restaurantCard';
import RestaurantMarkerView from './restaurantMarkerView';

import type { Restaurant } from '../restaurants.type';

interface RestaurantMarkerProps {
  restaurant: Restaurant;
}

function RestaurantMarker({ restaurant }: RestaurantMarkerProps) {
  const { open } = useModal();

  const focus = useCallback(
    (marker?: naver.maps.Marker) => {
      marker?.setZIndex(100);
      marker?.setIcon({
        content: ReactDOMServer.renderToString(
          <RestaurantMarkerView restaurant={restaurant} isHover />
        ),
      });
    },
    [restaurant]
  );

  const unfocus = useCallback(
    (marker?: naver.maps.Marker) => {
      marker?.setZIndex(10);
      marker?.setIcon({
        content: ReactDOMServer.renderToString(
          <RestaurantMarkerView restaurant={restaurant} />
        ),
      });
    },
    [restaurant]
  );

  const click = useCallback(
    (marker?: naver.maps.Marker) => {
      open(<RestaurantCard restaurant={restaurant} />);
      focus(marker);
    },
    [focus, open, restaurant]
  );

  const load = useCallback(
    (marker?: naver.maps.Marker) => {
      unfocus(marker);
    },
    [unfocus]
  );

  const mouseover = useCallback(
    (marker?: naver.maps.Marker) => {
      focus(marker);
    },
    [focus]
  );

  const mouseout = useCallback(
    (marker?: naver.maps.Marker) => {
      unfocus(marker);
    },
    [unfocus]
  );

  const tap = useCallback(
    (marker?: naver.maps.Marker) => {
      const isHover = marker?.getZIndex() === 100;

      if (isHover) {
        unfocus(marker);
      } else {
        focus(marker);
      }
    },
    [focus, unfocus]
  );

  return (
    <Marker
      click={click}
      load={load}
      mouseover={mouseover}
      mouseout={mouseout}
      tap={tap}
      options={{
        position: new naver.maps.LatLng(
          restaurant.latitude,
          restaurant.longitude
        ),
      }}
    />
  );
}

export default RestaurantMarker;
