import { css } from '@emotion/react';

function MapView() {
  return (
    <div
      css={css({
        width: '100%',
        padding: '2rem 1.5rem 0 1.5rem',
      })}
    >
      <div
        id="map"
        css={css({
          width: '100%',
          height: '800px',
        })}
      ></div>
    </div>
  );
}

export default MapView;
