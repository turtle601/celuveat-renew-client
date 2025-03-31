interface MarkerOptions<T> {
  marker: naver.maps.Marker;
  id: number;
  data: T;
}

export default class Marker<T> {
  id: number;
  marker: naver.maps.Marker;
  data: T;
  isFocus = false;
  isHover = false;
  listeners: naver.maps.MapEventListener[] = [];

  constructor(options: MarkerOptions<T>) {
    this.marker = options.marker;
    this.id = options.id;
    this.data = options.data;
  }

  load = ({
    click,
    mouseover,
    mouseout,
  }: {
    click?: VoidFunction;
    mouseover?: VoidFunction;
    mouseout?: VoidFunction;
  }) => {
    if (click) {
      this.click(click);
    }

    if (mouseover) {
      this.mouseover(mouseover);
    }
    if (mouseout) {
      this.mouseout(mouseout);
    }
  };

  unload = () => {
    this.listeners.forEach((listener) => {
      naver.maps.Event.removeListener(listener);
    });

    this.listeners = [];
    this.marker.setMap(null);
  };

  click = (fn: VoidFunction) => {
    const listener = naver.maps.Event.addListener(this.marker, 'click', fn);
    this.listeners.push(listener);
  };

  mouseover = (fn: VoidFunction) => {
    const listener = naver.maps.Event.addListener(this.marker, 'mouseover', fn);
    this.listeners.push(listener);
  };

  mouseout = (fn: VoidFunction) => {
    const listener = naver.maps.Event.addListener(this.marker, 'mouseout', fn);
    this.listeners.push(listener);
  };
}
