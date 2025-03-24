import { Global } from '@emotion/react';

import { Root } from './router';
import { getResetStyle } from '../shared/styles/reset';
import { SidebarPortal } from './portal';
import { QueryClientProvider } from './provider';

function App() {
  return (
    <QueryClientProvider>
      <Global styles={getResetStyle()} />
      <Root />
      <SidebarPortal />
    </QueryClientProvider>
  );
}

export default App;
