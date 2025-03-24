import { Link } from 'react-router';

import { Flex, Sidebar, spacer } from 'ik-ui-library';

import Logo from '../shared/assets/logo/logo.svg?react';
import List from '../shared/assets/etc/list.svg?react';

function Header() {
  return (
    <Flex
      as="header"
      justify="space-between"
      align="center"
      etcStyles={{
        width: '100%',
        height: '80px',
        padding: `0 ${spacer.spacing5}`,
      }}
    >
      <Link role="button" to="/">
        <Logo width={136} />
      </Link>

      <Sidebar.Toggle etcStyles={{ width: '48px', height: '48px' }}>
        <List />
      </Sidebar.Toggle>
    </Flex>
  );
}

export default Header;
