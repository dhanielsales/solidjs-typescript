import type { Component } from 'solid-js';
import { useRoutes, Router, hashIntegration } from '@solidjs/router';

import { routes } from './routes';
import { GlobalStyles } from './shared/theme/Global';

export const App: Component = () => {
  const Route = useRoutes(routes);

  return (
    <>
      <Router source={hashIntegration()}>
        <Route />
      </Router>
      <GlobalStyles />
    </>
  );
};
