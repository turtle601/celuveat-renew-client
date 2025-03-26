import ReactDOMServer from 'react-dom/server';

import { Marker } from '../../map/ui';
import RestaurantMarkerView from './restaurantMarkerView';

import type { Restaurant } from '../restaurants.type';
import { useCallback } from 'react';

interface RestaurantMarkerProps {
  restaurant: Restaurant;
}

function RestaurantMarker({ restaurant }: RestaurantMarkerProps) {
  const load = useCallback(
    (marker?: naver.maps.Marker) => {
      const htmlString = ReactDOMServer.renderToString(
        <RestaurantMarkerView restaurant={restaurant} />
      );

      marker?.setIcon({
        content: htmlString,
      });
    },
    [restaurant]
  );

  const mouseover = useCallback(
    (marker?: naver.maps.Marker) => {
      const htmlString = ReactDOMServer.renderToString(
        <RestaurantMarkerView restaurant={restaurant} isHover />
      );

      marker?.setZIndex(100);
      marker?.setIcon({
        content: htmlString,
      });
    },
    [restaurant]
  );

  const mouseout = useCallback(
    (marker?: naver.maps.Marker) => {
      const htmlString = ReactDOMServer.renderToString(
        <RestaurantMarkerView restaurant={restaurant} />
      );

      marker?.setZIndex(10);
      marker?.setIcon({
        content: htmlString,
      });
    },
    [restaurant]
  );

  const tap = useCallback(
    (marker?: naver.maps.Marker) => {
      const isHover = marker?.getZIndex() === 100;

      if (isHover) {
        mouseout(marker);
      } else {
        mouseover(marker);
      }
    },
    [mouseout, mouseover]
  );

  return (
    <Marker
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
