import { Suspense } from 'react';
import { css } from '@emotion/react';

import { Container, Flex, Responsive, spacer } from 'ik-ui-library';

import { breakPoint } from '../../shared/constant/breakpoint';

import { Header, Nav } from '../../widgets';
import { RestaurantsCardGrid } from '../../features/restaurants/ui';

function Page() {
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
            <Nav />
          </Responsive>
          <Suspense fallback={<div>Loading...</div>}>
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
              <RestaurantsCardGrid />
            </Responsive>
          </Suspense>
        </Flex>
      </Container>
    </>
  );
}

export default Page;
