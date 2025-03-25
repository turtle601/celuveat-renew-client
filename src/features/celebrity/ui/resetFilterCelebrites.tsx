import { borderRadius, Center, color, Modal, Text } from 'ik-ui-library';
import { useFilterCelebMutation } from '../../../entities/celebrities';

function ResetFilterCelebrities() {
  const { mutation } = useFilterCelebMutation();

  const handleClick = () => {
    mutation();
  };

  return (
    <Modal.Toggle
      modalContent={null}
      externalOnClick={handleClick}
      etcStyles={{
        width: '100%',
        height: '50px',
        backgroundColor: 'transparent',
        border: `1px solid ${color['gray100']}`,
        borderRadius: borderRadius.md,
        cursor: 'pointer',
      }}
    >
      <Center etcStyles={{ width: '100%' }}>
        <Text label={'전체'} textWeight="bold" textSize="sm" />
      </Center>
    </Modal.Toggle>
  );
}

export default ResetFilterCelebrities;
