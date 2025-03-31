import { css } from '@emotion/react';

import React from 'react';
import {
  getActiveNumBtnStyle,
  getCommonBtnStyle,
  getHoverBtnStyle,
  getNumBtnStyle,
} from './lib';
import { useCustomSearchParams } from '../../hooks';

export interface INumBtnProps {
  pageNum: number;
  externalOnClick?: () => void;
}

function NumBtn({ pageNum, externalOnClick }: INumBtnProps) {
  const { searchParams, setSearchParams } = useCustomSearchParams();

  const currentPage = Number(searchParams['page'] ?? 1);
  const isActive = currentPage === pageNum;

  const handleClick = () => {
    if (externalOnClick) {
      externalOnClick();
    }

    setSearchParams({
      page: String(pageNum),
    });
  };

  return (
    <button
      onClick={handleClick}
      css={css({
        ...getCommonBtnStyle(),
        ...getHoverBtnStyle(),
        ...(isActive ? getActiveNumBtnStyle() : getNumBtnStyle()),
      })}
    >
      {pageNum}
    </button>
  );
}

export default React.memo(NumBtn);
