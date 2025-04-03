import { css } from '@emotion/react';
import { Flex, Modal } from 'ik-ui-library';

import { Map } from '../../shared/ui/map';

import { RestaurantMarkers } from '../../features/restaurants/map/ui';
import { OpenFilterCelebModal } from '../../features/celebrity/ui';
import { OpenFilterCategoryModal } from '../../features/categories/ui';

function MapPage() {
  return (
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
          </div>
          <RestaurantMarkers />
        </Modal.Provider>
      </div>
    </Map.Provider>
  );
}

export default MapPage;
