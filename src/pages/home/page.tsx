import { css } from '@emotion/react';

import { DesktopHeader } from '../../widgets/header';
import { CelebProfileList } from '../../features/celeb/ui';

function Page() {
  return (
    <main
      css={css({
        display: 'flex',
        flexDirection: 'column',
        gap: '2.4rem',
        width: '100%',
        boxSizing: 'content-box',
        maxWidth: '1240px',
        margin: '0 auto',
        paddingBottom: '4.4rem',
      })}
    >
      <DesktopHeader />
      <section>
        <h2>셀럽 Best</h2>
        <CelebProfileList />
      </section>
      <section>
        <h2>추천 맛집!</h2>
      </section>
    </main>
  );
}

export default Page;
