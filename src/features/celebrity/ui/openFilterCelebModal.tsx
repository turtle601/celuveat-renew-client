import { Flex, Modal, Text } from 'ik-ui-library';

import Down from '../../../shared/assets/arrow/down.svg?react';

import FilterCelebrities from './filterCelebrities';
import { useCustomSearchParams } from '../../../shared/hooks';
import { PortalContainer, PortalWrapper } from '../../../shared/ui/portal';

function OpenFilterCelebModal() {
  const { searchParams } = useCustomSearchParams();

  return (
    <Modal.Open
      etcStyles={{
        width: 'max-content',
      }}
      modalContent={
        <PortalWrapper>
          <PortalContainer title={'어떤 셀럽이 다녀간 음식점을 찾고 계신가요?'}>
            <FilterCelebrities />
          </PortalContainer>
        </PortalWrapper>
      }
    >
      <Flex align="center" gap={'4px'}>
        <Text
          label={searchParams['celeb'] ?? '전체 셀럽'}
          textWeight="bold"
          textSize="md"
        />
        <Down />
      </Flex>
    </Modal.Open>
  );
}

export default OpenFilterCelebModal;
