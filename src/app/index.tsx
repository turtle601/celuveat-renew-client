import { Global } from '@emotion/react';

import { getResetStyle } from '../shared/styles/reset';

import { Root } from './router';
import { ModalProvider, QueryClientProvider } from './provider';
import { SidebarPortal, ModalPortal } from './portal';
import { BrowserRouter } from 'react-router';

function App() {
  return (
    <QueryClientProvider>
      <BrowserRouter>
        <ModalProvider>
          <Global styles={getResetStyle()} />
          <Root />
          <ModalPortal />
          <SidebarPortal />
        </ModalProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
