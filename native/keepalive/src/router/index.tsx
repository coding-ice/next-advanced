import { createBrowserRouter, RouteObject } from 'react-router-dom';

import Layout from '@/components/Layout';
import Aaa from '@/pages/Aaa';
import Bbb from '@/pages/Bbb';
import Ccc from '@/pages/Ccc';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Aaa /> },
      { path: '/bbb', element: <Bbb /> },
      { path: '/ccc', element: <Ccc /> },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
