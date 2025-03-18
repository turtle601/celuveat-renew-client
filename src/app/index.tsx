import { Global } from '@emotion/react';

import { Root } from './router';
import { getResetStyle } from '../shared/styles/reset';

function App() {
  return (
    <>
      <Global styles={getResetStyle()} />
      <Root />
    </>
  );
}

export default App;
