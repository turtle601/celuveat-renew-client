import { Pagination } from 'ik-ui-library';

import { useSearchParams } from 'react-router';

interface PaginationProviderProps {
  children: React.ReactNode;
}

function PaginationProvider({ children }: PaginationProviderProps) {
  const [searchParams] = useSearchParams();

  const currentPage = Number(searchParams.get('page'));

  return (
    <Pagination.Provider currentPageNum={currentPage}>
      {children}
    </Pagination.Provider>
  );
}

export default PaginationProvider;
