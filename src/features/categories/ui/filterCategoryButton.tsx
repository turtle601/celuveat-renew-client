import { borderRadius, Center, color, Modal, Text } from 'ik-ui-library';

import {
  Category,
  useFilterCategoryMutation,
} from '../../../entities/categories';
import { useCustomSearchParams } from '../../../shared/hooks';

interface FilterCategoryButtonProps {
  category: Category;
}

function FilterCategoryButton({ category }: FilterCategoryButtonProps) {
  const { filter } = useFilterCategoryMutation();
  const { searchParams } = useCustomSearchParams();

  const handleClick = () => {
    filter(category);
  };

  const isActive = searchParams['category'] === category;

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
        <Text label={category} textWeight="bold" textSize="sm" />
      </Center>
    </Modal.Close>
  );
}

export default FilterCategoryButton;
