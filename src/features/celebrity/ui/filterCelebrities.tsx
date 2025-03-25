import FilterCelebrityButton from './filterCelebrityButton';

import { useCelebritiesQuery } from '../../../entities/celebrities';
import { Grid } from 'ik-ui-library';
import ResetFilterCelebrities from './resetFilterCelebrites';

function FilterCelebrities() {
  const { data: celebrities } = useCelebritiesQuery();

  return (
    <>
      <Grid.Container as="section" etcStyles={{ width: '100%' }} gap={'4px'}>
        <Grid.Item xs={4} key={'all'} etcStyles={{ width: '100%' }}>
          <ResetFilterCelebrities />
        </Grid.Item>
        {celebrities.content.map((celeb) => {
          return (
            <Grid.Item xs={4} key={celeb.id} etcStyles={{ width: '100%' }}>
              <FilterCelebrityButton celeb={celeb} />
            </Grid.Item>
          );
        })}
      </Grid.Container>
    </>
  );
}

export default FilterCelebrities;
