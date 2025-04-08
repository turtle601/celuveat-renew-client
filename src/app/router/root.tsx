import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router';

import {
  NOT_FOUND_ERROR_MESSAGE,
  RUN_TIME_ERROR_MESSAGE,
} from '../../shared/constant/message';

import { Layout } from '../../widgets';
import { MapPage, RestaurantsPage, RouterErrorPage } from '../../pages';

const router: RouteObject[] = [
  {
    path: '/',
    element: <Layout.Header />,
    errorElement: <RouterErrorPage errorMessage={RUN_TIME_ERROR_MESSAGE} />,
    children: [
      {
        element: <Layout.Home />,
        children: [
          {
            index: true, // path="/" 역할
            element: <RestaurantsPage />,
          },
          {
            path: 'restaurants',
            element: <RestaurantsPage />,
          },
          {
            path: 'map',
            element: <MapPage />,
          },
        ],
      },
      {
        path: '*',
        element: <RouterErrorPage errorMessage={NOT_FOUND_ERROR_MESSAGE} />,
      },
    ],
  },
];

function Routers() {
  const browserRouter = createBrowserRouter(router);

  return <RouterProvider router={browserRouter}></RouterProvider>;
}

export default Routers;
