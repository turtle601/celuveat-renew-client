import { Grid } from 'ik-ui-library';

import { celebritiesData } from '../../../entities/celebrities';

import FilterCelebrityButton from './filterCelebrityButton';
import ResetFilterCelebrities from './resetFilterCelebrites';

function FilterCelebrities() {
  return (
    <>
      <Grid.Container etcStyles={{ width: '100%' }} gap={'4px'}>
        <Grid.Item xs={4} key={'all'} etcStyles={{ width: '100%' }}>
          <ResetFilterCelebrities />
        </Grid.Item>
        {celebritiesData?.content.map((celeb) => {
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
