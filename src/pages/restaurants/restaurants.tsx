import { Suspense } from 'react';
import { Flex, Pagination, Responsive } from 'ik-ui-library';

import { breakPoint } from '../../shared/constant/breakpoint';

import { RestaurantsCardGrid } from '../../features/restaurants/ui';
import { OpenFilterCelebModal } from '../../features/celebrity/ui';
import { OpenFilterCategoryModal } from '../../features/categories/ui';

import { useSearchParams } from 'react-router';

function RestaurantsPage() {
  const [searchParams] = useSearchParams();

  const currentPage = Number(searchParams.get('page')) || 1;

  return (
    <Pagination.Provider currentPageNum={currentPage}>
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
        </Responsive>
      </Suspense>
    </Pagination.Provider>
  );
}

export default RestaurantsPage;
