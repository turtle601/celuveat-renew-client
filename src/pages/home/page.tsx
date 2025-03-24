import { Container, Flex, Responsive, spacer } from 'ik-ui-library';

import { css } from '@emotion/react';

import { breakPoint } from '../../shared/constant/breakpoint';

import { Header, Nav } from '../../widgets';
import { useRestaurantsQuery } from '../../entities/restaurants';

function Page() {
  useRestaurantsQuery();

  return (
    <>
      <Container maxWidth={`${breakPoint.lg}px`}>
        <Responsive
          defaultStyles={{
            padding: `0 ${spacer.spacing5}`,
          }}
          breakpoint={[breakPoint.md]}
          breakPointStyles={[
            {
              '& button': {
                display: 'none',
              },
            },
          ]}
        >
          <Header />
        </Responsive>
      </Container>
      <div
        css={css({
          width: '100%',
          height: '1px',
          backgroundColor: '#eee',
        })}
      ></div>
      <Container maxWidth={`${breakPoint.lg}px`}>
        <Flex
          etcStyles={{
            padding: `0 ${spacer.spacing5}`,
          }}
        >
          <Responsive
            defaultStyles={{
              display: 'none',
            }}
            breakpoint={[breakPoint.md]}
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
            <Nav />
          </Responsive>
          <div>목록</div>
        </Flex>
      </Container>
    </>
  );
}

export default Page;
