import { Link } from 'react-router';
import { Flex } from 'ik-ui-library';

import Logo from '../../shared/assets/logo/logo.svg?react';

function DesktopHeader() {
  return (
    <Flex
      as="header"
      justify="space-between"
      align="center"
      etcStyles={{
        width: '100%',
        minWidth: '768px',
        height: '80px',
        borderBottom: '1px solid #EEE',
      }}
    >
      <Link aria-label="셀럽잇 홈페이지" role="button" to="/">
        <Logo width={136} />
      </Link>
      <div>dropdown</div>
    </Flex>
  );
}

export default DesktopHeader;
