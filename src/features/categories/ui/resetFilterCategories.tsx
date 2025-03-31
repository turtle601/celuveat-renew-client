import { useSearchParams } from 'react-router';
import { borderRadius, Center, color, Modal, Text } from 'ik-ui-library';

import { useFilterCategoryMutation } from '../../../entities/categories';

function ResetFilterCategories() {
  const { filter } = useFilterCategoryMutation();

  const [searchParams] = useSearchParams();
  const isActive = searchParams.get('category') === null;

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

export default ResetFilterCategories;
