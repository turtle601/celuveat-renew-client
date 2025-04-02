import { Suspense } from 'react';
import { Flex } from 'ik-ui-library';

import { RestaurantsCardGrid } from '../../features/restaurants/ui';
import { OpenFilterCelebModal } from '../../features/celebrity/ui';
import { OpenFilterCategoryModal } from '../../features/categories/ui';
import { Skelton } from '../../widgets/skelton';

function RestaurantsPage() {
  return (
    <Suspense fallback={<Skelton.Home />}>
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
    </Suspense>
  );
}

export default RestaurantsPage;
