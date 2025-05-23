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

  setMarkers = (markers: MarkerModel<T>[]) => {
    this.markers.setMarkers(markers);
    this.update();
  };

  setMarker = (marker: MarkerModel<T>) => {
    this.markers.setMarker(marker);
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
