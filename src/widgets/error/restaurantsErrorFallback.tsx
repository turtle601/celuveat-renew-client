import { css } from '@emotion/react';
import { FallbackProps } from 'react-error-boundary';

import { borderRadius, Center, color, Text } from 'ik-ui-library';
import { RUN_TIME_ERROR_MESSAGE } from '../../shared/constant/message';

function RestaurantsErrorFallback(props: FallbackProps) {
  return (
    <Center direction={'column'} etcStyles={{ width: '100%', height: '400px' }}>
      <div
        css={css({
          height: '24px',
        })}
      ></div>
      <Text
        label={props.error.errorMessage || RUN_TIME_ERROR_MESSAGE} // request 관련 에러가 아니라면 런타임 에러
        textWeight="bold"
        textColor={'gray400'}
      />
      <div
        css={css({
          height: '12px',
        })}
      ></div>
      <button
        css={css({
          padding: '8px',
          cursor: 'pointer',
          borderRadius: borderRadius.md,
          backgroundColor: color['primary-4'],
          color: color.white,
          '&:hover': {
            backgroundColor: color.gray200,
            color: color['primary-4'],
          },
        })}
        onClick={props.resetErrorBoundary}
      >
        다시 시도
      </button>
    </Center>
  );
}

export default RestaurantsErrorFallback;
