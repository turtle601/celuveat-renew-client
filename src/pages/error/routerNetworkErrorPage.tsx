import { Center, Text } from 'ik-ui-library';

function RouterNetworkErrorPage({ errorMessage }: { errorMessage: string }) {
  return (
    <Center
      direction={'column'}
      etcStyles={{ width: '100vw', height: '100vh' }}
    >
      <Text label={errorMessage} textColor={'gray400'} textWeight={'bold'} />
    </Center>
  );
}

export default RouterNetworkErrorPage;
