import { css } from '@emotion/react';
import { borderRadius, color, spacer, Spacer } from 'ik-ui-library';
import ModalHeader from './header';

interface ModalContainerProps {
  title: string;
  children: React.ReactNode;
}

function ModalContainer({ title, children }: ModalContainerProps) {
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
      <ModalHeader label={title} />
      <Spacer direction="vertical" space={spacer['spacing3']} />
      {children}
    </div>
  );
}

export default ModalContainer;
