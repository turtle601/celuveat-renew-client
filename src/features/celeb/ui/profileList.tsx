import { css } from '@emotion/react';

import { mainCeleb } from '../../../entities/celeb/model/mainCeleb';
import { CelebProfile } from '../../../entities/celeb/ui';

function ProfileList() {
  return (
    <div
      css={css({
        display: 'flex',
        gap: '2rem',
        padding: '1.6rem',
        justifyItems: 'flex-start',
        overflowX: 'scroll',
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      })}
    >
      {mainCeleb.map((celeb) => {
        return <CelebProfile key={celeb.id} {...celeb} />;
      })}
    </div>
  );
}

export default ProfileList;
