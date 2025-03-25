import { Flex, Modal, Text } from 'ik-ui-library';

interface ModalHeaderProps {
  label: string;
}

function ModalHeader({ label }: ModalHeaderProps) {
  return (
    <Flex justify="space-between" etcStyles={{ width: '100%' }}>
      <div></div>
      <Text as="div" label={label} textWeight="bold" textSize="md" />
      <div>
        <Modal.Toggle modalContent={null}>닫기</Modal.Toggle>
      </div>
    </Flex>
  );
}

export default ModalHeader;
