import { css } from '@emotion/react';
import { Link, Outlet } from 'react-router';

import {
  Container,
  Flex,
  Responsive,
  Sidebar,
  Spacer,
  spacer,
} from 'ik-ui-library';

import { breakPoint } from '../../shared/constant/breakpoint';

import Logo from '../../shared/assets/logo/logo.svg?react';
import List from '../../shared/assets/etc/list.svg?react';

function Header() {
  return (
    <>
      <Container maxWidth={`${breakPoint.lg}px`}>
        <Responsive
          defaultStyles={{
            padding: `0 ${spacer.spacing5}`,
          }}
          breakpoint={[breakPoint.lg]}
          breakPointStyles={[
            {
              '& button': {
                display: 'none',
              },
            },
          ]}
        >
          <Flex
            as="header"
            justify="space-between"
            align="center"
            etcStyles={{
              width: '100%',
              height: '80px',
            }}
          >
            <Link role="button" to="/">
              <Logo width={136} />
            </Link>

            <Sidebar.Toggle etcStyles={{ width: '48px', height: '48px' }}>
              <List />
            </Sidebar.Toggle>
          </Flex>
        </Responsive>
      </Container>
      <div
        css={css({
          width: '100%',
          height: '1px',
          backgroundColor: '#eee',
        })}
      ></div>
      <Container maxWidth={`${breakPoint.lg}px`} etcStyles={{ width: '100%' }}>
        <Outlet />
        <Spacer direction={'vertical'} space={spacer.spacing5} />
      </Container>
    </>
  );
}

export default Header;
