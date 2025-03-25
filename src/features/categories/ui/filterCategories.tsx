import { Grid } from 'ik-ui-library';

import FilterCategoryButton from './filterCategoryButton';

import { useCategoriesQuery } from '../../../entities/categories';
import ResetFilterCategories from './resetFilterCategories';

function FilterCategories() {
  const { data: categories } = useCategoriesQuery();

  return (
    <Grid.Container as="section" etcStyles={{ width: '100%' }} gap={'4px'}>
      <Grid.Item xs={4} key={'all'} etcStyles={{ width: '100%' }}>
        <ResetFilterCategories />
      </Grid.Item>
      {categories.content.map((category, id) => {
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
