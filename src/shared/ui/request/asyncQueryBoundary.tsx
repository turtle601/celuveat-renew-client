import React, { Suspense } from 'react';

import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import { QueryErrorResetBoundary } from '@tanstack/react-query';

interface IAsyncQueryBoundaryProps {
  errorFallback: (props: FallbackProps) => React.ReactNode;
  suspenseFallback: React.ReactNode;
  children: React.ReactNode;
}

function AsyncQueryBoundary({
  children,
  errorFallback,
  suspenseFallback,
}: IAsyncQueryBoundaryProps) {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary onReset={reset} fallbackRender={errorFallback}>
          <Suspense fallback={suspenseFallback}>{children}</Suspense>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
}

export default AsyncQueryBoundary;
