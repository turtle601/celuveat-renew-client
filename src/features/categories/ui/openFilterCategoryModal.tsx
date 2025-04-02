import { Flex, Modal, Text } from 'ik-ui-library';

import { useCustomSearchParams } from '../../../shared/hooks';

import Down from '../../../shared/assets/arrow/down.svg?react';
import { PortalContainer, PortalWrapper } from '../../../shared/ui/portal';

import FilterCategories from './filterCategories';

function OpenFilterCategoryModal() {
  const { searchParams } = useCustomSearchParams();

  return (
    <Modal.Open
      etcStyles={{
        width: 'max-content',
      }}
      modalContent={
        <PortalWrapper>
          <PortalContainer title={'음식 카테고리를 골라주세요'}>
            <FilterCategories />
          </PortalContainer>
        </PortalWrapper>
      }
    >
      <Flex align="center" gap={'4px'}>
        <Text
          label={searchParams['category'] ?? '전체 카테고리'}
          textWeight="bold"
          textSize="md"
        />
        <Down />
      </Flex>
    </Modal.Open>
  );
}

export default OpenFilterCategoryModal;
