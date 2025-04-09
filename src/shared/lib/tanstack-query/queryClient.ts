import { QueryClient } from '@tanstack/react-query';

export const queryClient: QueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      staleTime: 1000 * 60 * 3,
      throwOnError: true,
    },
  },
});
