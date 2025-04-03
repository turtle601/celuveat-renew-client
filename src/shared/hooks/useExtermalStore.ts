import { useSyncExternalStore } from 'react';
import ExternalStore from '../store/externalStore';

export const useExternalStore = <T, S extends ExternalStore<T>>(
  store: S
): [T, S] => {
  const snapshot = useSyncExternalStore<T>(
    (onStoreChange) => {
      store.addListener(onStoreChange);
      return () => store.removeListener(onStoreChange);
    },
    (): T => store.getSnapshot()
  );

  return [snapshot, store];
};
