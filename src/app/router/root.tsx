import { Routes, Route } from 'react-router';

import { Layout } from '../../widgets';

import { MapPage, RestaurantsPage } from '../../pages';

function Root() {
  return (
    <Routes>
      <Route element={<Layout.Header />}>
        <Route element={<Layout.Home />}>
          <Route path="/" element={<RestaurantsPage />} />
          <Route path="/restaurants" element={<RestaurantsPage />} />
          <Route path="/map" element={<MapPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default Root;
