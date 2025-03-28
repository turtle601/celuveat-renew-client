import { Modal } from 'ik-ui-library';
import { Routes, Route } from 'react-router';

import { Map } from '../../entities/map';
import { RestaurantPaginationProvider } from '../../entities/restaurants';

import { Layout } from '../../widgets';

import { MapPage, RestaurantsPage } from '../../pages';

function Root() {
  return (
    <Routes>
      <Route element={<Layout.Header />}>
        <Route element={<Layout.Home />}>
          <Route
            path="/"
            element={
              <RestaurantPaginationProvider>
                <RestaurantsPage />
              </RestaurantPaginationProvider>
            }
          />
          <Route
            path="/restaurants"
            element={
              <RestaurantPaginationProvider>
                <RestaurantsPage />
              </RestaurantPaginationProvider>
            }
          />
          <Route
            path="/map"
            element={
              <Modal.Provider>
                <Map.Provider>
                  <MapPage />
                </Map.Provider>
              </Modal.Provider>
            }
          />
        </Route>
      </Route>
    </Routes>
  );
}

export default Root;
