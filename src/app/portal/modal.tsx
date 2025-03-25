import { Modal } from 'ik-ui-library';

import { breakPoint } from '../../shared/constant/breakpoint';

function ModalPortal() {
  return (
    <Modal.Content
      dom={document.querySelector('#modal') as HTMLElement}
      breakpoint={breakPoint.lg}
    />
  );
}

export default ModalPortal;
