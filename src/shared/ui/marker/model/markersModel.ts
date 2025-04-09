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

  focusMarker = (id: number) => {
    this.markersData = this.markersData.map((marker) => {
      return {
        ...marker,
        isFocus: marker.id === id,
      };
    });
  };

  blurMarker = () => {
    this.markersData = this.markersData.map((marker) => {
      return {
        ...marker,
        isFocus: false,
      };
    });
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
