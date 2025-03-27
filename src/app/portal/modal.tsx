import { Modal } from 'ik-ui-library';

function ModalPortal() {
  return (
    <Modal.Content dom={document.querySelector('#modal') as HTMLElement} />
  );
}

export default ModalPortal;
