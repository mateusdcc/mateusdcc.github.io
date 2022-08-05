import { lazy } from 'solid-js'

import Home from './pages/home';
import Info from './pages/info';

export const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/info',
    component: Info,
  },
  {
    path: '**',
    component: lazy(() => import('./errors/404')),
  },
];
