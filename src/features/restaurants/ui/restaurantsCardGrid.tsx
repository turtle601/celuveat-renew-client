import { Grid } from 'ik-ui-library';

import { RestaurantCard } from '../../../entities/restaurants/ui';

import { useRestaurantsQuery } from '../../../entities/restaurants';

function RestaurantsCardGrid() {
  const { data: restaurantsData } = useRestaurantsQuery();

  return (
    <Grid.Container as="section" etcStyles={{ height: 'min-content' }}>
      {restaurantsData.content.map((restaurant) => {
        return (
          <Grid.Item xs={6} key={restaurant.id}>
            <RestaurantCard restaurant={restaurant} />
          </Grid.Item>
        );
      })}
    </Grid.Container>
  );
}

export default RestaurantsCardGrid;
