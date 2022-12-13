import { lazy } from 'solid-js';
import type { RouteDefinition } from '@solidjs/router';

import { HomePage } from '@modules/Home/pages/Home';
import { AboutData } from '@modules/About/pages/About.data';

import { routeMapping } from '@routes/routes-map';

export const routes: RouteDefinition[] = [
  {
    path: routeMapping.Home(),
    component: HomePage,
  },
  {
    path: routeMapping.About(),
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
