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

  const click = useCallback(() => {
    open(<RestaurantCard restaurant={restaurant} />);
  }, [open, restaurant]);

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
