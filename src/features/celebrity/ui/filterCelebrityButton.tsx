import { borderRadius, Center, color, Modal, Text } from 'ik-ui-library';

import {
  Celebrity,
  useFilterCelebMutation,
} from '../../../entities/celebrities';

interface FilterCelebrityButtonProps {
  celeb: Celebrity;
}

function FilterCelebrityButton({ celeb }: FilterCelebrityButtonProps) {
  const { mutation } = useFilterCelebMutation();

  const handleClick = () => {
    mutation(celeb.name);
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
        <Text label={celeb.name} textWeight="bold" textSize="sm" />
      </Center>
    </Modal.Toggle>
  );
}
export default FilterCelebrityButton;
