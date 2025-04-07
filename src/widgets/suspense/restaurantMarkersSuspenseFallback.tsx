import { css } from '@emotion/react';
import { borderRadius, Center, color } from 'ik-ui-library';

import { LoadingDots } from '../../shared/ui/loading';

function RestaurantMarkersSuspenseFallback() {
  return (
    <div
      css={css({
        position: 'absolute',
        width: '100%',
        bottom: '16px',
      })}
    >
      <div
        css={{
          width: '90%',
          margin: '0 auto',
        }}
      >
        <Center
          etcStyles={{
            color: color.white,
            borderRadius: borderRadius.sm,
            padding: '1rem',
          }}
        >
          <LoadingDots />
        </Center>
      </div>
    </div>
  );
}

export default RestaurantMarkersSuspenseFallback;
