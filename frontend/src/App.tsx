import { ThemeProvider } from '@primer/react';
import { BaseStyles } from '@primer/react';

import Router from './router/Router';

function App() {
  return (
    <>
      <ThemeProvider colorMode="auto">
        <BaseStyles>
          <Router />
        </BaseStyles>
      </ThemeProvider>
    </>
  );
}

export default App;
