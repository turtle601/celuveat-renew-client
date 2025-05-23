import { borderRadius, Center, color, Modal, Text } from 'ik-ui-library';

import { useCustomSearchParams } from '../../../shared/hooks';

import type { Category } from '../../../entities/categories';
import { useLocation } from 'react-router';

interface FilterCategoryButtonProps {
  category: Category;
}

function FilterRestaurantCategoryButton({
  category,
}: FilterCategoryButtonProps) {
  const location = useLocation();
  const { searchParams, setSearchParams } = useCustomSearchParams();

  const handleClick = () => {
    setSearchParams({
      page: location.pathname === '/restaurants' ? '1' : null,
      focusId: null,
      category,
    });
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

export default FilterRestaurantCategoryButton;
