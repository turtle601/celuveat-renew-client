import { Flex } from 'ik-ui-library';

import AsyncQueryBoundary from '../../shared/ui/request/asyncQueryBoundary';

import { OpenFilterCelebModal } from '../../features/celebrity/ui';
import { OpenFilterCategoryModal } from '../../features/categories/ui';
import { RestaurantsCardGrid } from '../../features/restaurants';

import RestaurantsErrorFallback from '../../widgets/error/restaurantsErrorFallback';
import { RestaurantsSuspenseFallback } from '../../widgets/suspense';

function RestaurantsPage() {
  return (
    <AsyncQueryBoundary
      errorFallback={RestaurantsErrorFallback}
      suspenseFallback={<RestaurantsSuspenseFallback />}
    >
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
      <RestaurantsCardGrid />
    </AsyncQueryBoundary>
  );
}

export default RestaurantsPage;
