import ExternalStore from '../../../store/externalStore';

import { MarkerModel, MarkersModel } from './markersModel';

export interface MarkersModelSnapshot<T> {
  markerData: MarkerModel<T>[];
}

export class MarkersStore<T> extends ExternalStore<MarkersModelSnapshot<T>> {
  public snapshot: MarkersModelSnapshot<T> = {
    markerData: [],
  };

  private markers = new MarkersModel<T>({});

  constructor() {
    super();
    this.takeSnapshot();
  }

  set = (markers: MarkerModel<T>[]) => {
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

  notHover = () => {
    this.markers.notHoverMarker();
    this.update();
  };

  update = () => {
    this.takeSnapshot();
    this.publish();
  };

  takeSnapshot = () => {
    this.snapshot = {
      markerData: [...this.markers.markersData],
    };
  };
}
