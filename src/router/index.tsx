import React, { Suspense } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import NotFound from '../pages/NotFound';
import Home from '../pages/Home';

function Router(): React.JSX.Element {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ]);

  return (
    <Suspense>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default Router;
