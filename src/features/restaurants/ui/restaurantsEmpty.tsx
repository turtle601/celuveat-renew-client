import { Center, Text } from 'ik-ui-library';

function RestaurantsEmpty() {
  return (
    <Center etcStyles={{ width: '100%', height: '450px' }}>
      <Text
        label={
          '아쉽지만, 조건에 맞는 음식점이 없어요. 다른 조건으로 다시 검색해 보세요!'
        }
        textColor={'gray300'}
        textSize="md"
        textWeight="bold"
      />
    </Center>
  );
}

export default RestaurantsEmpty;
