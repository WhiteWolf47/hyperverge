import { lazy, Suspense, ReactElement, PropsWithChildren } from 'react';
import { Outlet, RouteObject, createBrowserRouter } from 'react-router-dom';

import PageLoader from 'components/loading/PageLoader';
import Splash from 'components/loading/Splash';
import paths, { rootPaths } from './paths';

// Lazy load components
const App = lazy<() => ReactElement>(() => import('App'));
const MainLayout = lazy<({ children }: PropsWithChildren) => ReactElement>(
  () => import('layouts/main-layout'),
);
const AuthLayout = lazy<({ children }: PropsWithChildren) => ReactElement>(
  () => import('layouts/auth-layout'),
);
const Dashboard = lazy<() => ReactElement>(() => import('pages/dashboard/Dashboard'));
const Login = lazy<() => ReactElement>(() => import('pages/authentication/Login'));
const SignUp = lazy<() => ReactElement>(() => import('pages/authentication/SignUp'));
const ErrorPage = lazy<() => ReactElement>(() => import('pages/error/ErrorPage'));
const OtherApps = lazy<() => ReactElement>(() => import('pages/other-apps/OtherApps'));
const GoogleApps = lazy<() => ReactElement>(() => import('pages/google/GoogleApps'));

const routes: RouteObject[] = [
  {
    element: (
      <Suspense fallback={<Splash />}>
        <App />
      </Suspense>
    ),
    children: [
      {
        path: paths.home, // Ensure `paths.home` is correctly defined
        element: (
          <MainLayout>
            <Suspense fallback={<PageLoader />}>
              <Outlet />
            </Suspense>
          </MainLayout>
        ),
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
          {
            path: paths.otherapps, // Ensure `paths.otherapps` is correctly defined
            element: <OtherApps />, // Render the OtherApps component
          },
          {
            path: paths.google, // Ensure `paths.google` is correctly defined
            element: <GoogleApps />, // Render the GoogleApps component
          },
        ],
      },
      {
        path: rootPaths.authRoot, // Ensure this path is correctly set in `rootPaths`
        element: (
          <AuthLayout>
            <Suspense fallback={<PageLoader />}>
              <Outlet />
            </Suspense>
          </AuthLayout>
        ),
        children: [
          {
            path: paths.login, // Ensure `paths.login` is correctly defined
            element: <Login />,
          },
          {
            path: paths.signup, // Ensure `paths.signup` is correctly defined
            element: <SignUp />,
          },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
];

const options: { basename: string } = {
  basename: '/nickelfox',
};

const router = createBrowserRouter(routes, options);

export default router;
