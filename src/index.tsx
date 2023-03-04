import { render } from 'solid-js/web';
import { Router } from '@solidjs/router';
import { ThemeProvider } from 'solid-styled-components';

import { App } from './App';
import { theme } from './shared/theme/Theme';

const root = document.getElementById('root');

if (!root) {
  throw new Error('Root element not found');
}

render(
  () => (
    <ThemeProvider theme={theme}>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  ),
  root,
);
