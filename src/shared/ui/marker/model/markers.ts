import Marker from './marker';

export type MarkerSnapshot<T> = {
  markerMap?: Record<number, Marker<T>>;
};

export default class Markers<T> {
  markerMap: Record<number, Marker<T>> = {};

  constructor({ markers = [] }: { markers?: Marker<T>[] }) {
    this.markerMap = markers.reduce<Record<number, Marker<T>>>(
      (acc, marker) => {
        acc[marker.id] = marker;
        return acc;
      },
      {}
    );
  }

  addMarkers = (newMarkers: Marker<T>[]) => {
    this.markerMap = newMarkers.reduce<Record<number, Marker<T>>>(
      (acc, marker) => {
        acc[marker.id] = marker;
        marker.marker.setMap(marker.marker.getMap());
        return acc;
      },
      this.markerMap
    );
  };

  focusMarker = (id: number) => {
    this.blurMarker();

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
