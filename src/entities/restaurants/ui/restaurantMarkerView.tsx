import { borderRadius, color } from 'ik-ui-library';

import Marker from '../../../shared/ui/marker/model/marker';

import type { Restaurant } from '../restaurants.type';

import Eye from '../../../shared/assets/etc/eye.svg?react';

interface RestaurantMarkerViewProps {
  marker: Marker<Restaurant>;
}

function RestaurantMarkerView({ marker }: RestaurantMarkerViewProps) {
  const { data, isFocus, isHover } = marker;

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
