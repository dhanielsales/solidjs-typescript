import { lazy } from 'solid-js';
import type { RouteDefinition } from '@solidjs/router';

import { HomePage } from '@modules/Home/pages/Home';
import { AboutData } from '@modules/About/pages/about.data';

import { RoutesMap } from '@routes/routes-map';

export const routes: RouteDefinition[] = [
  {
    path: RoutesMap.Home,
    component: HomePage,
  },
  {
    path: RoutesMap.About,
    component: lazy(() =>
      import('@modules/About/pages/About').then((module) => ({ default: module.AboutPage })),
    ),
    data: AboutData,
  },
  {
    path: '**',
    component: lazy(() =>
      import('@modules/Errors/pages/NotFound').then((module) => ({ default: module.NotFoundPage })),
    ),
  },
];
