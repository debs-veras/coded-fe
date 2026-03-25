import React, { Suspense } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import NotFound from '../pages/NotFound';

function Router(): React.JSX.Element {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <div className='m-10'>Hello World</div>,
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
