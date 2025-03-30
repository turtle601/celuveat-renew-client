import ExternalStore from '../../../shared/store/externalStore';
import Marker from './marker';
import Markers, { MarkerSnapshot } from './markers';

export default class MarkersStore<T> extends ExternalStore<MarkerSnapshot<T>> {
  private markers = new Markers<T>({});

  constructor() {
    super();
    this.takeSnapshot();
  }

  add = (markers: Marker<T>[]) => {
    this.markers.addMarkers(markers);
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
