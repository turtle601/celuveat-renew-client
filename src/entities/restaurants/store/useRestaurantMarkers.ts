import { useExternalStore } from '../../../shared/hooks/useExtermalStore';
import {
  MarkersModelSnapshot,
  MarkersStore,
} from '../../../shared/ui/marker/model/markersModelStore';

import type { Restaurant } from '../type';

const markersStore = new MarkersStore<Restaurant>();

export const useRestaurantMarkersStore = () => {
  return useExternalStore<
    MarkersModelSnapshot<Restaurant>,
    MarkersStore<Restaurant>
  >(markersStore);
};
