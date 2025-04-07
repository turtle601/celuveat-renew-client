import { Grid } from 'ik-ui-library';

import RestaurantCard from './restaurantCard';

import { breakPoint } from '../../../shared/constant/breakpoint';

function RestaurantCardGrid() {
  return (
    <Grid.Container
      responsive={[[6, breakPoint.lg]]}
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
