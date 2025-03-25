import { borderRadius, Center, color, Modal, Text } from 'ik-ui-library';

import {
  Category,
  useFilterCategoryMutation,
} from '../../../entities/categories';

interface FilterCategoryButtonProps {
  category: Category;
}

function FilterCategoryButton({ category }: FilterCategoryButtonProps) {
  const { mutation } = useFilterCategoryMutation();

  const handleClick = () => {
    mutation(category);
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
        <Text label={category} textWeight="bold" textSize="sm" />
      </Center>
    </Modal.Toggle>
  );
}

export default FilterCategoryButton;
