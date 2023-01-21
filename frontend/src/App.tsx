import { ThemeProvider } from '@primer/react';
import { BaseStyles } from '@primer/react';
import { AuthProvider } from 'react-auth-kit';
import { QueryClient, QueryClientProvider } from 'react-query';

import Router from './router/Router';

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <ThemeProvider colorMode="auto">
        <QueryClientProvider client={queryClient}>
          <BaseStyles>
            <AuthProvider authType={'localstorage'} authName={'_auth'}>
              <Router />
            </AuthProvider>
          </BaseStyles>
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
