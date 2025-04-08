import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router';

import {
  NOT_FOUND_ERROR_MESSAGE,
  OFFLINE_ERROR_MESSAGE,
  RUN_TIME_ERROR_MESSAGE,
} from '../../shared/constant/message';
import { useNetworkStatus } from '../../shared/hooks';

import { Layout } from '../../widgets';
import {
  MapPage,
  RestaurantsPage,
  RouterErrorPage,
  RouterNetworkErrorPage,
} from '../../pages';

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
            index: true,
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
  const { isOnline } = useNetworkStatus();
  const browserRouter = createBrowserRouter(router);

  if (!isOnline) {
    return <RouterNetworkErrorPage errorMessage={OFFLINE_ERROR_MESSAGE} />;
  }

  return <RouterProvider router={browserRouter} />;
}

export default Routers;
