import { borderRadius, color } from 'ik-ui-library';

import type { Restaurant } from '../restaurants.type';

interface RestaurantMarkerViewProps {
  isHover?: boolean;
  restaurant: Restaurant;
}

function RestaurantMarkerView({
  restaurant,
  isHover = false,
}: RestaurantMarkerViewProps) {
  return (
    <div
      className={isHover ? 'restaurant-marker_hover' : ''}
      style={{
        width: 'max-content',
        padding: '0.5rem',
        border: `1px solid ${color['primary-4']}`,
        backgroundColor: color['white'],
        borderRadius: borderRadius.md,
      }}
    >
      <span
        style={{
          color: color['black'],
          fontSize: '10px',
          fontWeight: 'bold',
        }}
      >
        {restaurant.name}
      </span>
    </div>
  );
}

export default RestaurantMarkerView;
