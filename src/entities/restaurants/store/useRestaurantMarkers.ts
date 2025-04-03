import { useExternalStore } from '../../../shared/hooks/useExtermalStore';
import { MarkersStore } from '../../../shared/ui/marker/model/markersModelStore';

import type { Restaurant } from '../type';
import type { MarkersModelSnapshot } from '../../../shared/ui/marker';

const markersStore = new MarkersStore<Restaurant>();

export const useRestaurantMarkersStore = () => {
  return useExternalStore<
    MarkersModelSnapshot<Restaurant>,
    MarkersStore<Restaurant>
  >(markersStore);
};
