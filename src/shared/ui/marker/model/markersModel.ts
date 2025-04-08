export interface MarkerModel<T> {
  id: number;
  data: T;
  isFocus: boolean;
  isHover: boolean;
}

export class MarkersModel<T> {
  public focusedId: number | null = null;
  public markersData: MarkerModel<T>[] = [];

  constructor({ markers = [] }: { markers?: MarkerModel<T>[] }) {
    this.setMarkers(markers);
  }

  setMarkers = (newMarkers: MarkerModel<T>[]) => {
    this.markersData = newMarkers.map((marker) => {
      if (this.focusedId === marker.id) {
        return {
          ...marker,
          isFocus: true,
        };
      }

      return marker;
    });
  };

  focusMarker = (id: number) => {
    this.markersData = this.markersData.map((marker) => {
      return {
        ...marker,
        isFocus: marker.id === id,
      };
    });

    this.focusedId = id;
  };

  blurMarker = () => {
    this.markersData = this.markersData.map((marker) => {
      return {
        ...marker,
        isFocus: false,
      };
    });

    this.focusedId = null;
  };

  hoverMarker = (id: number) => {
    this.markersData = this.markersData.map((marker) => {
      return {
        ...marker,
        isHover: marker.id === id,
      };
    });
  };

  notHoverMarker = () => {
    this.markersData = this.markersData.map((marker) => {
      return {
        ...marker,
        isHover: false,
      };
    });
  };
}
