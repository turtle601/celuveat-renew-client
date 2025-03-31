import { useSearchParams } from 'react-router';
import { borderRadius, Center, color, Modal, Text } from 'ik-ui-library';

import {
  Celebrity,
  useFilterCelebMutation,
} from '../../../entities/celebrities';

interface FilterCelebrityButtonProps {
  celeb: Celebrity;
}

function FilterCelebrityButton({ celeb }: FilterCelebrityButtonProps) {
  const { filter } = useFilterCelebMutation();

  const [searchParams] = useSearchParams();
  const isActive = searchParams.get('celeb') === celeb.name;

  const handleClick = () => {
    filter(celeb.name);
  };

  return (
    <Modal.Close
      externalOnClick={handleClick}
      etcStyles={{
        width: '100%',
        height: '50px',
        border: `1px solid ${isActive ? color['primary-4'] : color['gray100']}`,
        borderRadius: borderRadius.md,
      }}
    >
      <Center etcStyles={{ width: '100%' }}>
        <Text label={celeb.name} textWeight="bold" textSize="sm" />
      </Center>
    </Modal.Close>
  );
}
export default FilterCelebrityButton;
