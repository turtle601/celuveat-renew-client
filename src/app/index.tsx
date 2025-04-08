import { Global } from '@emotion/react';

import { getResetStyle } from '../shared/styles/reset';

import { Routers } from './router';
import { ModalProvider, QueryClientProvider } from './provider';

function App() {
  return (
    <QueryClientProvider>
      <ModalProvider>
        <Global styles={getResetStyle()} />
        <Routers />
      </ModalProvider>
    </QueryClientProvider>
  );
}

export default App;
