import { css } from '@emotion/react';
import { borderRadius, color, spacer, Spacer } from 'ik-ui-library';
import ModalHeader from './header';

interface ModalContainerProps {
  children: React.ReactNode;
}

function ModalContainer({ children }: ModalContainerProps) {
  return (
    <div
      css={css({
        width: '100%',
        height: '100%',
        backgroundColor: color['white'],
        padding: '1.5rem',
        borderRadius: borderRadius.md,
      })}
    >
      <ModalHeader />
      <Spacer direction="vertical" space={spacer['spacing3']} />
      {children}
    </div>
  );
}

export default ModalContainer;
