import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './app';
import { enableMocking } from './mock';

import './shared/styles/global.css';

enableMocking().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
});
