import Marker from './marker';

export type MarkerSnapshot<T> = {
  markerMap?: Record<number, Marker<T>>;
};

export default class Markers<T> {
  private focusedId: number | null = null;

  public markerMap: Record<number, Marker<T>> = {};

  constructor({ markers = [] }: { markers?: Marker<T>[] }) {
    this.setMarkers(markers);
  }

  resetMarkers = () => {
    Object.values(this.markerMap).forEach((marker) => {
      marker.unload();
    });
  };

  setMarkers = (newMarkers: Marker<T>[]) => {
    this.markerMap = newMarkers.reduce<Record<number, Marker<T>>>(
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
