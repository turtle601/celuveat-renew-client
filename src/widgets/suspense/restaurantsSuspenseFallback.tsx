import { color, Flex, Responsive } from 'ik-ui-library';

import { css } from '@emotion/react';

import { Skelton } from './skelton';
import { breakPoint } from '../../shared/constant/breakpoint';

function RestaurantsSuspenseFallback() {
  return (
    <Responsive
      defaultStyles={{
        width: '100%',
        '& section': {
          gridTemplateColumns: `repeat(6, minmax(0, 1fr))`,
        },
      }}
      breakpoint={[breakPoint.lg]}
      breakPointStyles={[
        {
          '& section': {
            gridTemplateColumns: `repeat(12, minmax(0, 1fr))`,
          },
        },
      ]}
    >
      <Flex
        etcStyles={{
          padding: '40px 1.5rem 0 1.5rem',
          'div + div': {
            marginLeft: '1rem',
          },
        }}
      >
        <div
          css={css({
            width: '100px',
            height: '20px',
            backgroundColor: color.gray200,
          })}
        ></div>
        <div
          css={css({
            width: '100px',
            height: '20px',
            backgroundColor: color.gray200,
          })}
        ></div>
      </Flex>
      <Skelton.RestaurantCardGrid />
    </Responsive>
  );
}

export default RestaurantsSuspenseFallback;
