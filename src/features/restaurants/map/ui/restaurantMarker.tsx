import { useModal } from 'ik-ui-library';

import { Marker, MarkerModel } from '../../../../shared/ui/marker';

import {
  Restaurant,
  RestaurantCard,
  RestaurantMarkerView,
  useRestaurantMarkersStore,
} from '../../../../entities/restaurants';

function RestaurantMarker({
  markerModel,
}: {
  markerModel: MarkerModel<Restaurant>;
}) {
  const { open } = useModal();

  const [, markerStore] = useRestaurantMarkersStore();

  const handleClick = () => {
    open(<RestaurantCard restaurant={markerModel.data} />);
    markerStore.focus(markerModel.id);
  };

  const handleMouseout = () => {
    markerStore.notHover(markerModel.id);
  };

  const handleMouseover = () => {
    markerStore.hover(markerModel.id);
  };

  return (
    <Marker
      markerModel={markerModel}
      click={handleClick}
      mouseover={handleMouseover}
      mouseout={handleMouseout}
    >
      <RestaurantMarkerView marker={markerModel} />
    </Marker>
  );
}

export default RestaurantMarker;
