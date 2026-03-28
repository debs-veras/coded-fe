import React, { Suspense, lazy } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import PageLoader from '../components/PageLoader';
import { ProtectedRoute, RoleProtectedRoute } from './ProtectedRoute';

const AdminLayout = lazy(() => import('../layouts/AdminLayout'));
const Home = React.lazy(() => import('../pages/Home'));
const Login = React.lazy(() => import('../pages/Login'));
const NotFound = React.lazy(() => import('../pages/NotFound'));

function Router(): React.JSX.Element {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/',
      element: (
        <ProtectedRoute>
          <AdminLayout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: 'users',
          element: (
            <RoleProtectedRoute allowedRoles={['STUDENT']}>
              Hello World
            </RoleProtectedRoute>
          ),
        },
      ],
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ]);

  return (
    <Suspense fallback={<PageLoader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default Router;
