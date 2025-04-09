export interface MarkerModel<T> {
  id: number;
  data: T;
  isFocus: boolean;
  isHover: boolean;
}

export class MarkersModel<T> {
  public markersData: MarkerModel<T>[] = [];

  constructor({ markers = [] }: { markers?: MarkerModel<T>[] }) {
    this.setMarkers(markers);
  }

  setMarkers = (newMarkers: MarkerModel<T>[]) => {
    this.markersData = [...newMarkers];
  };

  setMarker = (newMarker: MarkerModel<T>) => {
    this.markersData = this.markersData.map((marker) => {
      if (newMarker.id === marker.id) {
        return newMarker;
      }

      return marker;
    });
  };
}
