import { useCallback, useEffect, useRef } from 'react';
import { borderRadius, color } from 'ik-ui-library';

import {
  Restaurant,
  useRestaurantMarkersStore,
} from '../../../../entities/restaurants';

import { MarkerModel } from '../../../../shared/ui/marker';

import Marker from '../../../../shared/ui/marker/ui';
import { useCustomSearchParams } from '../../../../shared/hooks';

interface RestaurantMarkerProps {
  restaurantMarker: MarkerModel<Restaurant>;
}

function RestaurantMarker({ restaurantMarker }: RestaurantMarkerProps) {
  const mapRef = useRef<naver.maps.Marker | null>(null);

  const [, markerStore] = useRestaurantMarkersStore();
  const { setSearchParams } = useCustomSearchParams();

  const getRestaurantMarkerIcon = useCallback(
    (restaurantMarker: MarkerModel<Restaurant>) => {
      const { isFocus, isHover } = restaurantMarker;

      return `
        <div 
          style="
            width: max-content; 
            padding: 0.5rem; 
            border: 1px solid ${color['primary-4']}; 
            background-color: #fff;
            border-radius: ${borderRadius.md};
            transform: ${isFocus || isHover ? 'scale(1.1)' : 'scale(1)'};
            pointer-events: none;
          
          "
        >
          <div 
            style="
                display: flex;
                alignItems: center;
                gap: 0.25rem;
              "
            >
            <span
              style="
                color: ${isFocus ? 'red' : color['black']};
                font-size: 10px;
                font-weight: bold;
              "
            >
              ${restaurantMarker.data.name}
            </span>
          </div>
        </div>
      `;
    },
    []
  );

  useEffect(() => {
    if (mapRef.current) {
      const content = getRestaurantMarkerIcon(restaurantMarker);

      mapRef.current.setIcon({
        content,
      });
    }
  }, [getRestaurantMarkerIcon, restaurantMarker]);

  useEffect(() => {
    if (mapRef.current) {
      const zIdx = restaurantMarker.isHover
        ? 1000
        : restaurantMarker.isFocus
        ? 500
        : 10;

      mapRef.current.setZIndex(zIdx);
    }
  }, [
    restaurantMarker.isFocus,
    restaurantMarker.isHover,
    restaurantMarker.data,
  ]);

  const handleClick = () => {
    setSearchParams({
      focusId: restaurantMarker.data.id.toString(),
    });
  };

  const handleMouseout = () => {
    markerStore.setMarker({
      ...restaurantMarker,
      isHover: false,
    });
  };

  const handleMouseover = () => {
    markerStore.setMarker({
      ...restaurantMarker,
      isHover: true,
    });
  };

  return (
    <Marker
      ref={mapRef}
      key={restaurantMarker.id}
      options={{
        position: new naver.maps.LatLng(
          restaurantMarker.data.latitude,
          restaurantMarker.data.longitude
        ),
      }}
      events={{
        onClick: handleClick,
        onMouseout: handleMouseout,
        onMouseover: handleMouseover,
      }}
    />
  );
}

export default RestaurantMarker;
