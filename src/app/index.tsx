import { Global } from '@emotion/react';

import { Root } from './router';
import { getResetStyle } from '../shared/styles/reset';
import { SidebarPortal } from './portal';

function App() {
  return (
    <>
      <Global styles={getResetStyle()} />
      <Root />
      <SidebarPortal />
    </>
  );
}

export default App;
