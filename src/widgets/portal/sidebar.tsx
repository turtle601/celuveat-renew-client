import { css } from '@emotion/react';

import { borderRadius, Flex, Sidebar, spacer, Spacer } from 'ik-ui-library';

import Logo from '../../shared/assets/logo/logo-icon.svg?react';
import Prev from '../../shared/assets/arrow/prev.svg?react';

import { MapLinkButton } from '../../features/restaurants/map/ui';
import { RestaurantsLinkButton } from '../../features/restaurants';

function SidebarPortal() {
  return (
    <Sidebar.Content dom={document.querySelector('#sidebar') as HTMLElement}>
      <div
        css={css({
          width: '250px',
          height: '100vh',
          backgroundColor: '#fff',
          borderRadius: borderRadius.sm,
          padding: '1rem',
        })}
      >
        <Flex gap={'1rem'}>
          <Sidebar.Close
            etcStyles={{
              width: '48px',
              height: '48px',
              backgroundColor: 'transparent',
            }}
          >
            <Prev />
          </Sidebar.Close>
          <Logo width={48} />
        </Flex>
        <Spacer direction="vertical" space={spacer['spacing5']} />
        <Flex direction="column" gap={'4px'}>
          <Sidebar.Close etcStyles={{ width: '100%' }}>
            <RestaurantsLinkButton />
          </Sidebar.Close>
          <Sidebar.Close etcStyles={{ width: '100%' }}>
            <MapLinkButton />
          </Sidebar.Close>
        </Flex>
      </div>
    </Sidebar.Content>
  );
}

export default SidebarPortal;
