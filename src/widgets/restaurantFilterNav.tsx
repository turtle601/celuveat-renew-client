import { Suspense } from 'react';
import { Flex, Modal, Text } from 'ik-ui-library';

import { ModalContainer } from '../shared/ui/modal';

import Down from '../shared/assets/arrow/down.svg?react';

import { FilterCelebrities } from '../features/celebrity/ui';

function RestaurantFilterNav() {
  return (
    <Flex
      etcStyles={{
        padding: '40px 1.5rem 0 1.5rem',
        'button + button': {
          marginLeft: '1rem',
        },
      }}
    >
      <Modal.Toggle
        etcStyles={{
          width: 'max-content',
        }}
        modalContent={
          <ModalContainer>
            <Suspense fallback={<div>로딩중</div>}>
              <FilterCelebrities />
            </Suspense>
          </ModalContainer>
        }
      >
        <Flex align="center" gap={'4px'}>
          <Text label="모든 셀럽" textWeight="bold" textSize="md" />
          <Down />
        </Flex>
      </Modal.Toggle>
      <Modal.Toggle
        etcStyles={{
          width: 'max-content',
        }}
        modalContent={
          <ModalContainer>
            <Suspense fallback={<div>로딩중</div>}>
              <FilterCelebrities />
            </Suspense>
          </ModalContainer>
        }
      >
        <Flex align="center" gap={'4px'}>
          <Text label="모든 카테고리" textWeight="bold" textSize="md" />
          <Down />
        </Flex>
      </Modal.Toggle>
    </Flex>
  );
}

export default RestaurantFilterNav;
