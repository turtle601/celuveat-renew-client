import { Suspense } from 'react';
import { Flex, Modal, Text } from 'ik-ui-library';

import { ModalContainer } from '../shared/ui/modal';

import Down from '../shared/assets/arrow/down.svg?react';

import { FilterCelebrities } from '../features/celebrity/ui';
import { FilterCategories } from '../features/categories/ui';
import { useSearchParams } from 'react-router';

function RestaurantFilterNav() {
  const [searchParams] = useSearchParams();

  return (
    <Flex
      etcStyles={{
        padding: '40px 1.5rem 0 1.5rem',
        'button + button': {
          marginLeft: '1rem',
        },
      }}
    >
      <Modal.Open
        etcStyles={{
          width: 'max-content',
        }}
        modalContent={
          <ModalContainer title={'어떤 셀럽이 다녀간 음식점을 찾고 계신가요?'}>
            <Suspense fallback={<div>로딩중</div>}>
              <FilterCelebrities />
            </Suspense>
          </ModalContainer>
        }
      >
        <Flex align="center" gap={'4px'}>
          <Text
            label={searchParams.get('celeb') ?? '전체 셀럽'}
            textWeight="bold"
            textSize="md"
          />
          <Down />
        </Flex>
      </Modal.Open>
      <Modal.Open
        etcStyles={{
          width: 'max-content',
        }}
        modalContent={
          <ModalContainer title={'어떤 카테고리의 음식점을 찾고 계신가요?'}>
            <Suspense fallback={<div>로딩중</div>}>
              <FilterCategories />
            </Suspense>
          </ModalContainer>
        }
      >
        <Flex align="center" gap={'4px'}>
          <Text
            label={searchParams.get('category') ?? '전체 카테고리'}
            textWeight="bold"
            textSize="md"
          />
          <Down />
        </Flex>
      </Modal.Open>
    </Flex>
  );
}

export default RestaurantFilterNav;
