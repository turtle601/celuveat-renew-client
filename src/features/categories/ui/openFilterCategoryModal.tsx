import { Suspense } from 'react';
import { useSearchParams } from 'react-router';
import { Flex, Modal, Text } from 'ik-ui-library';

import { ModalContainer } from '../../../shared/ui/modal';

import Down from '../../../shared/assets/arrow/down.svg?react';

import FilterCategories from './filterCategories';

function OpenFilterCategoryModal() {
  const [searchParams] = useSearchParams();

  return (
    <Modal.Open
      etcStyles={{
        width: 'max-content',
      }}
      modalContent={
        <ModalContainer title={'음식 카테고리를 골라주세요'}>
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
  );
}

export default OpenFilterCategoryModal;
