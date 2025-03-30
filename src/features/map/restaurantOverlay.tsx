import { useEffect } from 'react';
import { useSearchParams } from 'react-router';

import type { Restaurant } from '../../entities/restaurants/restaurants.type';

type MapElementType = {
  setMap(map: naver.maps.Map | null): void;
  getMap(): naver.maps.Map | null;
};

interface RestaurantOverlayProps {
  restaurant: Restaurant;
  element: MapElementType;
}

function RestaurantOverlay({ restaurant, element }: RestaurantOverlayProps) {
  const [searchParams] = useSearchParams();

  const boundary = searchParams.get('boundary');

  useEffect(() => {
    const isBoundary = () => {
      if (!boundary) return;

      const boundaryParams = JSON.parse(decodeURIComponent(boundary));

      return (
        restaurant.latitude >= boundaryParams.min.lat &&
        restaurant.latitude <= boundaryParams.max.lat &&
        restaurant.longitude >= boundaryParams.min.lng &&
        restaurant.longitude <= boundaryParams.max.lng
      );
    };

    if (!isBoundary()) {
      element.setMap(null);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [boundary]);

  return <></>;
}

export default RestaurantOverlay;
