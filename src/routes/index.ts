import { lazy } from 'solid-js';
import type { RouteDefinition } from '@solidjs/router';

import { HomePage } from '@modules/Home/pages/Home';

import { routeMapping } from '@routes/routes-map';

export const routes: RouteDefinition[] = [
  {
    path: routeMapping.Home(),
    component: HomePage,
  },
  {
    path: '**',
    component: lazy(() =>
      import('@modules/Errors/pages/NotFound').then((module) => ({ default: module.NotFoundPage })),
    ),
  },
];
