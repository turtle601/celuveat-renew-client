import React from 'react';
import { css } from '@emotion/react';

import { Center } from 'ik-ui-library';

import { getCommonBtnStyle, getDisableBtnStyle, getHoverBtnStyle } from './lib';

import LeftArrowIcon from '../../assets/arrow/prev.svg?react';
import { useCustomSearchParams } from '../../hooks';

export interface IPrevBtnProps {
  isDisabled: boolean;
  externalOnClick?: () => void;
}

function PrevBtn({ isDisabled, externalOnClick }: IPrevBtnProps) {
  const { searchParams, setSearchParams } = useCustomSearchParams();

  const handleClick = () => {
    if (externalOnClick) {
      externalOnClick();
    }

    setSearchParams({
      page: String(Number(searchParams['page'] ?? 1) - 1),
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
      <LeftArrowIcon width={'16px'} height={'16px'} fill={'currentColor'} />
    </Center>
  );
}

export default React.memo(PrevBtn);
