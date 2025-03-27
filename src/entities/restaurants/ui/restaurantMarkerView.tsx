import { borderRadius, color } from 'ik-ui-library';

import type { Restaurant } from '../restaurants.type';

interface RestaurantMarkerViewProps {
  isHover?: boolean;
  restaurant: Restaurant;
  onClick?: () => void;
}

function RestaurantMarkerView({
  restaurant,
  isHover = false,
  onClick,
}: RestaurantMarkerViewProps) {
  return (
    <div
      onClick={onClick}
      className={isHover ? 'restaurant-marker_hover' : ''}
      style={{
        width: 'max-content',
        padding: '0.5rem',
        border: `1px solid ${color['primary-4']}`,
        backgroundColor: color['white'],
        borderRadius: borderRadius.md,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
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
    </div>
  );
}

export default RestaurantMarkerView;
