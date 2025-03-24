import { ReactNode } from 'react';
import { QueryClientProvider as TanStackQueryClientProvider } from '@tanstack/react-query';

import { queryClient } from '../../shared/lib/tanstack-query';

interface IQueryClientProviderProps {
  children: ReactNode;
}

function QueryClientProvider({ children }: IQueryClientProviderProps) {
  return (
    <TanStackQueryClientProvider client={queryClient}>
      {children}
    </TanStackQueryClientProvider>
  );
}

export default QueryClientProvider;
