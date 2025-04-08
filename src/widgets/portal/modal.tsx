import { Modal } from 'ik-ui-library';

function ModalPortal() {
  return <Modal.Portal dom={document.querySelector('#modal') as HTMLElement} />;
}

export default ModalPortal;
