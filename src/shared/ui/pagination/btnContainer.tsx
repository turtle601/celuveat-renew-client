import React from 'react';
import { getMakePageNumList } from './lib';
import { useSearchParams } from 'react-router';

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
  const [searchParams] = useSearchParams();

  const currentPage = Number(searchParams.get('page') ?? 1);

  const isNextDisabled = currentPage === totalPage;
  const isPrevDisabled = currentPage === 1;
  const isShow = totalPage > 1;
  const pageNumList = getMakePageNumList(currentPage, totalPage, range);

  return (
    isShow && <>{children({ pageNumList, isPrevDisabled, isNextDisabled })}</>
  );
}

export default React.memo(BtnContainer);
