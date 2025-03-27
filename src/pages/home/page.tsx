import { Suspense } from 'react';
import { css } from '@emotion/react';

import { Container, Flex, Modal, Responsive, spacer, Tab } from 'ik-ui-library';

import { breakPoint } from '../../shared/constant/breakpoint';

import { Header, Nav } from '../../widgets';
import { RestaurantsCardGrid } from '../../features/restaurants/ui';
import RestaurantFilterNav from '../../widgets/restaurantFilterNav';

import { Map } from '../../entities/map';
import { RestaurantMarkers } from '../../features/map';

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
      <Container maxWidth={`${breakPoint.lg}px`} etcStyles={{ width: '100%' }}>
        <Flex
          etcStyles={{
            width: '100%',
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
          <div css={{ width: '100%' }}>
            <RestaurantFilterNav />
            <Tab.Panels etcStyle={{ width: '100%' }}>
              <Tab.Panel>
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
              </Tab.Panel>
              <Tab.Panel>
                <Modal.Provider
                  isBackDropClose={false}
                  contentDefaultStyles={{
                    width: '100%',
                    position: 'absolute',
                    height: '200px',
                    zIndex: 12,
                    bottom: '12px',
                  }}
                >
                  <Map.Provider>
                    <div
                      css={css({
                        width: '100%',
                        paddingTop: '1.5rem',
                        position: 'relative',
                      })}
                    >
                      <div
                        id="map"
                        css={css({
                          width: '100%',
                          height: '1000px',
                        })}
                      ></div>
                      <Map.ModalContent />
                    </div>

                    <RestaurantMarkers />
                  </Map.Provider>
                </Modal.Provider>
              </Tab.Panel>
            </Tab.Panels>
          </div>
        </Flex>
      </Container>
    </>
  );
}

export default Page;
