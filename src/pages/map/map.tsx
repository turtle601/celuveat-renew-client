import { css } from '@emotion/react';
import { Flex, Modal } from 'ik-ui-library';

import { Map } from '../../shared/ui/map';
import AsyncQueryBoundary from '../../shared/ui/request/asyncQueryBoundary';

import { RestaurantMarkers } from '../../features/restaurants/map/ui';
import { OpenFilterCelebModal } from '../../features/celebrity/ui';
import { OpenFilterCategoryModal } from '../../features/categories/ui';

import { MapErrorFallback } from '../../widgets/error';
import { RestaurantMarkersSuspenseFallback } from '../../widgets/suspense';
import { ErrorBoundary } from 'react-error-boundary';

function MapPage() {
  return (
    <ErrorBoundary fallback={<>에러 발생</>}>
      <Map.Provider>
        <div css={css({ width: '100%' })}>
          <Flex
            etcStyles={{
              padding: '40px 1.5rem 0 1.5rem',
              'button + button': {
                marginLeft: '1rem',
              },
            }}
          >
            <OpenFilterCelebModal />
            <OpenFilterCategoryModal />
          </Flex>
          <Modal.Provider>
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
                  height: '75vh',
                })}
              ></div>
              <Map.Content />
              <AsyncQueryBoundary
                errorFallback={MapErrorFallback}
                suspenseFallback={<RestaurantMarkersSuspenseFallback />}
              >
                <RestaurantMarkers />
              </AsyncQueryBoundary>
            </div>
          </Modal.Provider>
        </div>
      </Map.Provider>
    </ErrorBoundary>
  );
}

export default MapPage;
