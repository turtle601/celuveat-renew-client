import { Routes, Route } from 'react-router';
import { HomePage } from '../../pages/home';
import PaginationProvider from '../provider/paginationProvider';

function Root() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PaginationProvider>
            <HomePage />
          </PaginationProvider>
        }
      />
    </Routes>
  );
}

export default Root;
