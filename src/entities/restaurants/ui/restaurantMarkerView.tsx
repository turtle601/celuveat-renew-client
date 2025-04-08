import { borderRadius, color } from 'ik-ui-library';

import Eye from '../../../shared/assets/etc/eye.svg?react';

import type { Restaurant } from '../type';

interface RestaurantMarkerViewProps {
  data: Restaurant;
  isFocus: boolean;
  isHover: boolean;
}

function RestaurantMarkerView({
  data,
  isFocus,
  isHover,
}: RestaurantMarkerViewProps) {
  const className = isFocus || isHover ? 'restaurant-marker_hover' : '';

  return (
    <div
      className={className}
      style={{
        width: 'max-content',
        padding: '0.5rem',
        border: `1px solid ${color['primary-4']}`,
        backgroundColor: color['white'],
        borderRadius: borderRadius.md,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
        {isFocus && <Eye width={12} />}
        <span
          style={{
            color: color['black'],
            fontSize: '10px',
            fontWeight: 'bold',
          }}
        >
          {data.name}
        </span>
      </div>
    </div>
  );
}

export default RestaurantMarkerView;
