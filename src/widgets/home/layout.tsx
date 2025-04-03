import { css } from '@emotion/react';
import { Outlet } from 'react-router';
import { Flex, Responsive, spacer } from 'ik-ui-library';

import { breakPoint } from '../../shared/constant/breakpoint';

import { RestaurantsLinkButton } from '../../features/restaurants/ui';
import { MapLinkButton } from '../../features/restaurants/map/ui';

function HomeLayout() {
  return (
    <Flex
      etcStyles={{
        width: '100%',
        padding: `0 ${spacer.spacing2}`,
      }}
    >
      <Responsive
        defaultStyles={{
          display: 'none',
        }}
        breakpoint={[breakPoint.lg]}
        breakPointStyles={[
          {
            display: 'block',
            width: '200px',
            height: '100vh',
            borderRight: '1px solid #eee',
            padding: `2.5rem ${spacer['spacing2.5']} 0 0`,
          },
        ]}
      >
        <Flex direction="column" gap={'4px'}>
          <RestaurantsLinkButton />

          <MapLinkButton />
        </Flex>
      </Responsive>
      <div css={css({ width: '100%' })}>
        <Outlet />
      </div>
    </Flex>
  );
}

export default HomeLayout;
