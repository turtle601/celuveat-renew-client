import { Suspense } from 'react';
import { useSearchParams } from 'react-router';
import { Flex, Modal, Text } from 'ik-ui-library';

import { ModalContainer } from '../../../shared/ui/modal';

import Down from '../../../shared/assets/arrow/down.svg?react';

import FilterCelebrities from './filterCelebrities';

function OpenFilterCelebModal() {
  const [searchParams] = useSearchParams();

  return (
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
  );
}

export default OpenFilterCelebModal;
