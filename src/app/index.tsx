import { Global } from '@emotion/react';

import { getResetStyle } from '../shared/styles/reset';

import { Root } from './router';
import { QueryClientProvider } from './provider';
import { SidebarPortal, ModalPortal } from './portal';
import { BrowserRouter } from 'react-router';

function App() {
  return (
    <QueryClientProvider>
      <BrowserRouter>
        <Global styles={getResetStyle()} />
        <Root />
        <SidebarPortal />
        <ModalPortal />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
