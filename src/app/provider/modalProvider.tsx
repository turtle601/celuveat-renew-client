import { Modal } from 'ik-ui-library';
import { breakPoint } from '../../shared/constant/breakpoint';

interface ModalProviderProps {
  children: React.ReactNode;
}

function ModalProvider({ children }: ModalProviderProps) {
  return (
    <Modal.Provider
      breakPoint={breakPoint.lg}
      contentDefaultStyles={{
        width: '100%',
        height: '80%',
        zIndex: 11,
        position: 'absolute',
        bottom: 0,
      }}
    >
      {children}
    </Modal.Provider>
  );
}

export default ModalProvider;
