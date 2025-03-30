import { useSyncExternalStore } from 'react';

import { MarkerSnapshot } from '../model/markers';
import MarkersStore from '../model/markersStore';

import type { Restaurant } from '../../../../entities/restaurants/restaurants.type';

const markersStore = new MarkersStore<Restaurant>();

export const useRestaurantsMarkersStore = (): [
  MarkerSnapshot<Restaurant>,
  MarkersStore<Restaurant>
] => {
  const snapshot = useSyncExternalStore(
    (onStoreChange) => {
      markersStore.addListener(onStoreChange);
      return () => markersStore.removeListener(onStoreChange);
    },
    () => {
      return markersStore.getSnapshot();
    }
  );

  return [snapshot, markersStore];
};
