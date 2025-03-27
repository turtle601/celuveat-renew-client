import { css } from '@emotion/react';
import { borderRadius, Center, color, Modal, useModal } from 'ik-ui-library';

import Down from '../../../shared/assets/arrow/down.svg?react';

function ModalContent() {
  const { isOpen, content } = useModal();

  return (
    isOpen && (
      <div
        css={css({
          position: 'absolute',
          width: '100%',
          bottom: '12px',
        })}
      >
        <div
          css={{
            width: '90%',
            backgroundColor: color['white'],
            borderRadius: borderRadius.sm,
            margin: '0 auto',
          }}
        >
          <Modal.Close
            etcStyles={{
              width: '100%',
              padding: '0.5rem 0 0 0',
              backgroundColor: color['white'],
            }}
          >
            <Center etcStyles={{ width: '100%' }}>
              <Down />
            </Center>
          </Modal.Close>
          {content}
        </div>
      </div>
    )
  );
}

export default ModalContent;
