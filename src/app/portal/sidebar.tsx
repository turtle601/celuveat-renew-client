import { css } from '@emotion/react';

import { borderRadius, Flex, Sidebar, spacer, Spacer } from 'ik-ui-library';

import { MapLinkButton } from '../../features/map';
import { RestaurantsLinkButton } from '../../features/restaurants';

import Logo from '../../shared/assets/logo/logo-icon.svg?react';
import Prev from '../../shared/assets/arrow/prev.svg?react';

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
          <Sidebar.Toggle
            etcStyles={{
              width: '48px',
              height: '48px',
              backgroundColor: 'transparent',
            }}
          >
            <Prev />
          </Sidebar.Toggle>
          <Logo width={48} />
        </Flex>
        <Spacer direction="vertical" space={spacer['spacing5']} />
        <Flex direction="column" gap={'4px'}>
          <RestaurantsLinkButton />
          <MapLinkButton />
        </Flex>
      </div>
    </Sidebar.Content>
  );
}

export default SidebarPortal;
