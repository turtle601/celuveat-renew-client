import { Grid } from 'ik-ui-library';

import FilterCategoryButton from './filterCategoryButton';

import { useCategoriesQuery } from '../../../entities/categories';

function FilterCategories() {
  const { data: categories } = useCategoriesQuery();

  return (
    <Grid.Container as="section" etcStyles={{ width: '100%' }} gap={'4px'}>
      {categories.content.map((category) => {
        return (
          <Grid.Item xs={4} key={category.id} etcStyles={{ width: '100%' }}>
            <FilterCategoryButton category={category} />
          </Grid.Item>
        );
      })}
    </Grid.Container>
  );
}

export default FilterCategories;
