import { css } from '@emotion/react';
import { Flex } from 'ik-ui-library';

import { Map } from '../../entities/map';
import { RestaurantMarkers } from '../../features/map';
import OpenFilterCelebModal from '../../features/celebrity/ui/openFilterCelebModal';
import { OpenFilterCategoryModal } from '../../features/categories/ui';

function MapPage() {
  return (
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
        <Map.ModalContent />
      </div>
      <RestaurantMarkers />
    </div>
  );
}

export default MapPage;
