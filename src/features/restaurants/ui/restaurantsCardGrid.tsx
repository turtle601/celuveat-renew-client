import { Center, Flex, Grid, Pagination, spacer, Spacer } from 'ik-ui-library';

import { RestaurantCard } from '../../../entities/restaurants/ui';

import { useRestaurantsQuery } from '../../../entities/restaurants';

function RestaurantsCardGrid() {
  const { data: restaurantsData } = useRestaurantsQuery();

  return (
    <>
      <Grid.Container
        as="section"
        etcStyles={{ width: '100%', height: 'min-content' }}
      >
        {restaurantsData.content.map((restaurant) => {
          return (
            <Grid.Item xs={6} key={restaurant.id}>
              <RestaurantCard restaurant={restaurant} />
            </Grid.Item>
          );
        })}
      </Grid.Container>
      <Spacer direction="vertical" space={spacer.spacing3} />
      <Center etcStyles={{ width: '100%' }}>
        <Pagination.BtnContainer
          totalPage={restaurantsData.totalPage}
          range={5}
        >
          {({ pageNumList, isNextDisabled, isPrevDisabled }) => {
            return (
              <Flex gap="8px">
                <Pagination.PrevBtn isDisabled={isPrevDisabled} />
                {pageNumList.map((pageNum) => {
                  return <Pagination.NumBtn pageNum={pageNum} />;
                })}
                <Pagination.NextBtn isDisabled={isNextDisabled} />
              </Flex>
            );
          }}
        </Pagination.BtnContainer>
      </Center>
    </>
  );
}

export default RestaurantsCardGrid;
