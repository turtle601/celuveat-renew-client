import React from 'react';
import { css } from '@emotion/react';

import { Center } from 'ik-ui-library';
import { getCommonBtnStyle, getDisableBtnStyle, getHoverBtnStyle } from './lib';

import RightArrowIcon from '../../assets/arrow/next.svg?react';
import { useCustomSearchParams } from '../../hooks';

export interface INextBtnProps {
  isDisabled: boolean;
  externalOnClick?: () => void;
}

function NextBtn({ isDisabled, externalOnClick }: INextBtnProps) {
  const { searchParams, setSearchParams } = useCustomSearchParams();

  const handleClick = () => {
    if (externalOnClick) {
      externalOnClick();
    }

    setSearchParams({
      page: String(Number(searchParams['page'] ?? 1) + 1),
    });
  };

  return (
    <Center
      as="button"
      disabled={isDisabled}
      onClick={handleClick}
      css={css({
        ...getCommonBtnStyle(),
        ...getHoverBtnStyle(),
        ...getDisableBtnStyle(),
      })}
    >
      <RightArrowIcon width={16} height={16} />
    </Center>
  );
}

export default React.memo(NextBtn);
