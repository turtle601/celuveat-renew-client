import { Container, Flex, Spacer } from 'ik-ui-library';

import { DesktopHeader } from '../../widgets/header';
import { CelebProfileList } from '../../features/celeb/ui';
import { RecommendRestaurantCardList } from '../../features/restaurant/ui';

function Page() {
  return (
    <Container as="main" maxWidth={'1240px'} minWdith={'260px'}>
      <DesktopHeader />
      <Spacer direction="vertical" space={'32px'} />
      <section>
        <Flex as="h1">셀럽 Best</Flex>
        <CelebProfileList />
      </section>
      <Spacer direction="vertical" space={'32px'} />
      <section>
        <Flex as="h1">추천 맛집!</Flex>
        <Spacer direction="vertical" space={'32px'} />
        <RecommendRestaurantCardList />
      </section>
    </Container>
  );
}

export default Page;
