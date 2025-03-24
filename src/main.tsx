import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './app';
import { enableMocking } from './mock';

enableMocking().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
});
