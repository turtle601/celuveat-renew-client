import ExternalStore from '../../../store/externalStore';

import { MarkerModel } from './markerModel';
import { MarkersModel, MarkersModelSnapshot } from './markersModel';

export class MarkersStore<T> extends ExternalStore<MarkersModelSnapshot<T>> {
  public snapshot: MarkersModelSnapshot<T> = {};
  private markers = new MarkersModel<T>({});

  constructor() {
    super();
    this.takeSnapshot();
  }

  set = (markers: MarkerModel<T>[]) => {
    this.markers.resetMarkers();
    this.markers.setMarkers(markers);
    this.update();
  };

  focus = (id: number) => {
    this.markers.focusMarker(id);
    this.update();
  };

  blur = () => {
    this.markers.blurMarker();
    this.update();
  };

  hover = (id: number) => {
    this.markers.hoverMarker(id);
    this.update();
  };

  notHover = (id: number) => {
    this.markers.notHoverMarker(id);
    this.update();
  };

  update = () => {
    this.takeSnapshot();
    this.publish();
  };

  takeSnapshot = () => {
    this.snapshot = {
      markerMap: this.markers.markerMap,
    };
  };
}
