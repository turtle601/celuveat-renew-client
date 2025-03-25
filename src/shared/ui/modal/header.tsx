import { Flex, Modal, Text } from 'ik-ui-library';

function ModalHeader() {
  return (
    <Flex justify="space-between" etcStyles={{ width: '100%' }}>
      <div></div>
      <Text
        as="div"
        label="어떤 셀럽을 찾고 계신가요?"
        textWeight="bold"
        textSize="md"
      />
      <div>
        <Modal.Toggle modalContent={null}>닫기</Modal.Toggle>
      </div>
    </Flex>
  );
}

export default ModalHeader;
