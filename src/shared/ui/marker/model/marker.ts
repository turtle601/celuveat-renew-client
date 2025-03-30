export default class Marker<T> {
  id: number;
  marker: naver.maps.Marker;
  data: T;
  isFocus = false;
  isHover = false;
  constructor(options: { marker: naver.maps.Marker; id: number; data: T }) {
    this.marker = options.marker;
    this.id = options.id;
    this.data = options.data;
  }
}
