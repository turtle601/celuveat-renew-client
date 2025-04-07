import { Grid } from 'ik-ui-library';

import { categoriesData } from '../../../entities/categories';

import FilterCategoryButton from './filterCategoryButton';
import ResetFilterCategories from './resetFilterCategories';

function FilterCategories() {
  return (
    <Grid.Container etcStyles={{ width: '100%' }} gap={'4px'}>
      <Grid.Item xs={4} key={'all'} etcStyles={{ width: '100%' }}>
        <ResetFilterCategories />
      </Grid.Item>
      {categoriesData?.content.map((category, id) => {
        return (
          <Grid.Item xs={4} key={id} etcStyles={{ width: '100%' }}>
            <FilterCategoryButton category={category} />
          </Grid.Item>
        );
      })}
    </Grid.Container>
  );
}

export default FilterCategories;
