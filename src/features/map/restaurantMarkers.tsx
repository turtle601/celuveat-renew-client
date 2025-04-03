import ReactDOMServer from 'react-dom/server';

import { useEffect } from 'react';
import { useRestaurantMarkers } from '../../entities/restaurants/queries';

import Marker from '../../shared/ui/marker/model/marker';

import { useMap } from '../../shared/ui/map/model';
import { useModal } from 'ik-ui-library';
import { useRestaurantsMarkersStore } from '../../shared/ui/marker';

import {
  RestaurantCard,
  RestaurantMarkerView,
} from '../../entities/restaurants';

import type { Restaurant } from '../../entities/restaurants/type';

interface MarkerView1Props<T> {
  marker: Marker<T>;
  click?: VoidFunction;
  mouseover?: VoidFunction;
  mouseout?: VoidFunction;
  children: React.ReactNode;
}

function MarkerView1<T>({
  marker,
  click,
  mouseover,
  mouseout,
  children,
}: MarkerView1Props<T>) {
  const map = useMap();

  useEffect(() => {
    if (map) {
      marker.load({
        click,
        mouseover,
        mouseout,
      });

      marker.marker.setMap(map);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [marker, map]);

  useEffect(() => {
    marker.marker.setIcon({
      content: ReactDOMServer.renderToString(children),
    });

    if (marker.isFocus) {
      marker.marker.setZIndex(500);
    } else if (marker.isHover) {
      marker.marker.setZIndex(1000);
    } else {
      marker.marker.setZIndex(100);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [marker, marker.isFocus, marker.isHover]);

  return <></>;
}

function RestaurantMarker1({ marker }: { marker: Marker<Restaurant> }) {
  const { open } = useModal();

  const [, markerStore] = useRestaurantsMarkersStore();

  const handleClick = () => {
    open(<RestaurantCard restaurant={marker.data} />);
    markerStore.focus(marker.id);
  };

  const handleMouseout = () => {
    markerStore.notHover(marker.id);
  };

  const handleMouseover = () => {
    markerStore.hover(marker.id);
  };

  return (
    <MarkerView1
      marker={marker}
      click={handleClick}
      mouseover={handleMouseover}
      mouseout={handleMouseout}
    >
      <RestaurantMarkerView marker={marker} />
    </MarkerView1>
  );
}

function RestaurantMarkers() {
  const { markerMap } = useRestaurantMarkers();

  if (!markerMap) return;

  return (
    <>
      {Object.values(markerMap).map((marker) => (
        <RestaurantMarker1 key={marker.id} marker={marker} />
      ))}
    </>
  );
}

export default RestaurantMarkers;
