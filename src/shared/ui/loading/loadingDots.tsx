import { css } from '@emotion/react';
import { Center } from 'ik-ui-library';

import { getDotStyle, getDotsWrapperStyle } from './loading.style';

function LoadingDots() {
  return (
    <Center
      etcStyles={{
        ...getDotsWrapperStyle(),
      }}
    >
      <div css={css({ ...getDotStyle() })}></div>
      <div css={css({ ...getDotStyle(), animationDelay: '0.2s' })}></div>
      <div css={css({ ...getDotStyle(), animationDelay: '0.4s' })}></div>
    </Center>
  );
}

export default LoadingDots;
