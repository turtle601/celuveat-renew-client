import { Grid } from 'ik-ui-library';

import RestaurantCard from './restaurantCard';

function RestaurantCardGrid() {
  return (
    <Grid.Container
      as="section"
      etcStyles={{ width: '100%', height: 'min-content' }}
    >
      {Array(10)
        .fill(0)
        .map((restaurant) => {
          return (
            <Grid.Item xs={6} key={restaurant.id}>
              <RestaurantCard />
            </Grid.Item>
          );
        })}
    </Grid.Container>
  );
}

export default RestaurantCardGrid;
