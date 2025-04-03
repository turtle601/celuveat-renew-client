import { MarkerModel } from './markerModel';

export type MarkersModelSnapshot<T> = {
  markerMap?: Record<number, MarkerModel<T>>;
};

export class MarkersModel<T> {
  private focusedId: number | null = null;

  public markerMap: Record<number, MarkerModel<T>> = {};

  constructor({ markers = [] }: { markers?: MarkerModel<T>[] }) {
    this.setMarkers(markers);
  }

  resetMarkers = () => {
    Object.values(this.markerMap).forEach((marker) => {
      marker.unload();
    });
  };

  setMarkers = (newMarkers: MarkerModel<T>[]) => {
    this.markerMap = newMarkers.reduce<Record<number, MarkerModel<T>>>(
      (acc, marker) => {
        acc[marker.id] = marker;

        if (marker.id === this.focusedId) {
          marker.isFocus = true;
        }

        return acc;
      },
      this.markerMap
    );
  };

  focusMarker = (id: number) => {
    this.blurMarker();
    this.focusedId = id;
    this.markerMap[id].isFocus = true;
  };

  blurMarker = () => {
    Object.values(this.markerMap).forEach((marker) => {
      marker.isFocus = false;
    });
  };

  hoverMarker = (id: number) => {
    this.markerMap[id].isHover = true;
  };

  notHoverMarker = (id: number) => {
    this.markerMap[id].isHover = false;
  };
}
