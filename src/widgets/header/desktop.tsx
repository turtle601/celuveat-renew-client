import { css } from '@emotion/react';
import { Link } from 'react-router';

import Logo from '../../shared/assets/logo/logo.svg?react';

function DesktopHeader() {
  return (
    <header
      css={css({
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',

        width: '100%',
        height: '80px',

        padding: '1.2rem 2.4rem',

        background: '#fff',
        borderBottom: '1px solid #eee',
      })}
    >
      <Link aria-label="셀럽잇 홈페이지" role="button" to="/">
        <Logo width={136} />
      </Link>
      <div
        css={css({
          display: 'flex',
          gap: '2.4rem',
        })}
      ></div>
    </header>
  );
}

export default DesktopHeader;
