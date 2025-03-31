import React from 'react';
import { getMakePageNumList } from './lib';

import { useCustomSearchParams } from '../../hooks';

interface IChildrenParams {
  pageNumList: number[];
  isPrevDisabled: boolean;
  isNextDisabled: boolean;
}

export interface IBtnContainerProps {
  totalPage: number;
  range: number;
  children: ({
    pageNumList,
    isPrevDisabled,
    isNextDisabled,
  }: IChildrenParams) => React.ReactNode;
}

function BtnContainer({ totalPage, range, children }: IBtnContainerProps) {
  const { searchParams } = useCustomSearchParams();

  const currentPage = Number(searchParams['page'] ?? 1);

  const isNextDisabled = currentPage === totalPage;
  const isPrevDisabled = currentPage === 1;
  const isShow = totalPage > 1;
  const pageNumList = getMakePageNumList(currentPage, totalPage, range);

  return (
    isShow && <>{children({ pageNumList, isPrevDisabled, isNextDisabled })}</>
  );
}

export default React.memo(BtnContainer);
