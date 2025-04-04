import { borderRadius, Center, color, Modal, Text } from 'ik-ui-library';

import { useCustomSearchParams } from '../../../shared/hooks';
import { useFilterCelebMutation } from '../../../entities/celebrities';

function ResetFilterCelebrities() {
  const { filter } = useFilterCelebMutation();
  const { searchParams } = useCustomSearchParams();

  const isActive = !searchParams['celeb'];

  return (
    <Modal.Close
      externalOnClick={filter}
      etcStyles={{
        width: '100%',
        height: '50px',
        border: `1px solid ${isActive ? color['primary-4'] : color['gray100']}`,
        borderRadius: borderRadius.md,
      }}
    >
      <Center etcStyles={{ width: '100%' }}>
        <Text label={'전체'} textWeight="bold" textSize="sm" />
      </Center>
    </Modal.Close>
  );
}

export default ResetFilterCelebrities;
