import { useSearchParams } from 'react-router';
import { getQueryString, getSearchParamsObject } from '../lib/queryString';

export const useCustomSearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchParamsObject = getSearchParamsObject(searchParams);

  const setSearchParamsObject = (params: {
    [key: string]: string | undefined | null;
  }) => {
    setSearchParams(
      getQueryString({
        ...searchParamsObject,
        ...params,
      })
    );
  };

  return {
    searchParams: searchParamsObject,
    setSearchParams: setSearchParamsObject,
  };
};
