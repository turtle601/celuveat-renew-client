import { css } from '@emotion/react';

import {
  borderRadius,
  Center,
  color,
  spacer,
  Spacer,
  Text,
} from 'ik-ui-library';

import { FallbackProps } from 'react-error-boundary';

import { RUN_TIME_ERROR_MESSAGE } from '../../shared/constant/message';

import Refresh from '../../shared/assets/etc/refresh.svg?react';

function MapErrorFallback(props: FallbackProps) {
  return (
    <div
      css={css({
        position: 'absolute',
        width: '100%',
        bottom: '16px',
      })}
    >
      <div
        css={{
          width: '90%',
          margin: '0 auto',
        }}
      >
        <Center
          etcStyles={{
            backgroundColor: 'red',
            color: color.white,
            borderRadius: borderRadius.sm,
            padding: '1rem',
          }}
        >
          <button
            css={css({
              backgroundColor: 'transparent',
              cursor: 'pointer',
            })}
            onClick={props.resetErrorBoundary}
          >
            <Refresh width={16} height={16} fill={color.white} />
          </button>
          <Spacer direction="horizontal" space={spacer.spacing2} />
          <Text
            label={props.error.errorMessage || RUN_TIME_ERROR_MESSAGE}
            textWeight="regular"
            textColor="gray100"
          />
        </Center>
      </div>
    </div>
  );
}

export default MapErrorFallback;
