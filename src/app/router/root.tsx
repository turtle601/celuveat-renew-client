import { Routes, Route } from 'react-router';
import { HomePage } from '../../pages/home';
import { Pagination } from 'ik-ui-library';

function Root() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Pagination.Provider>
            <HomePage />
          </Pagination.Provider>
        }
      />
    </Routes>
  );
}

export default Root;
