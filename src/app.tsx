import type { Component } from 'solid-js';
import { useRoutes, Router, pathIntegration } from '@solidjs/router';

import { routes } from './routes';
import { GlobalStyles } from './shared/theme/global';

export const App: Component = () => {
  const Route = useRoutes(routes);

  return (
    <>
      <Router source={pathIntegration()}>
        <Route />
      </Router>
      <GlobalStyles />
    </>
  );
};
