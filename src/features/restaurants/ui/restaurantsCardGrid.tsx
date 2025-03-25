import { Center, Flex, Grid, Pagination, spacer, Spacer } from 'ik-ui-library';

import { RestaurantCard } from '../../../entities/restaurants/ui';

import {
  useRestaurantPageMutation,
  useRestaurantsQuery,
} from '../../../entities/restaurants';

function RestaurantsCardGrid() {
  const { data: restaurantsData } = useRestaurantsQuery();

  const { mutation, prevPageMutation, nextPageMutation } =
    useRestaurantPageMutation();

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
                <Pagination.PrevBtn
                  isDisabled={isPrevDisabled}
                  externalOnClick={prevPageMutation}
                />
                {pageNumList.map((pageNum) => {
                  return (
                    <Pagination.NumBtn
                      pageNum={pageNum}
                      externalOnClick={() => mutation(pageNum)}
                    />
                  );
                })}
                <Pagination.NextBtn
                  isDisabled={isNextDisabled}
                  externalOnClick={nextPageMutation}
                />
              </Flex>
            );
          }}
        </Pagination.BtnContainer>
      </Center>
    </>
  );
}

export default RestaurantsCardGrid;
