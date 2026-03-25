import React, { Suspense } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

function Router(): React.JSX.Element {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <div className='m-10'>Hello World</div>,
    },
  ]);

  return (
    <Suspense>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default Router;
