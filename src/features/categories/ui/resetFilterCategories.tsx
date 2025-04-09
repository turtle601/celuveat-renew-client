import { borderRadius, Center, color, Modal, Text } from 'ik-ui-library';

import { useCustomSearchParams } from '../../../shared/hooks';

function ResetFilterCategories() {
  const { searchParams, setSearchParams } = useCustomSearchParams();

  const handleClick = () => {
    setSearchParams({
      page: location.pathname === '/restaurants' ? '1' : null,
      focusId: null,
      category: undefined,
    });
  };

  const isActive = !searchParams['category'];

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
        <Text label={'전체'} textWeight="bold" textSize="sm" />
      </Center>
    </Modal.Close>
  );
}

export default ResetFilterCategories;
