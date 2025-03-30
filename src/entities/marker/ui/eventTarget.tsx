import { useEffect } from 'react';
import Marker from '../model/marker';

interface EventTargetProps<T> {
  element: Marker<T>;
  onClick?: (element: naver.maps.Marker) => void;
  onTap?: (element: naver.maps.Marker) => void;
  onMouseover?: (element: naver.maps.Marker) => void;
  onMouseout?: (element: naver.maps.Marker) => void;
  children?: React.ReactNode;
}

function EventTarget<T>({
  element,
  onClick,
  onTap,
  onMouseout,
  onMouseover,
  children,
}: EventTargetProps<T>) {
  useEffect(() => {
    const zIndex = element.isFocus || element.isHover ? 1000 : 100;
    element.marker.setZIndex(zIndex);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [element.isFocus, element.isHover]);

  useEffect(() => {
    if (!onClick) return;
    const listener = naver.maps.Event.addListener(
      element.marker,
      'click',
      onClick
    );

    return () => {
      if (!onClick) return;

      naver.maps.Event.removeListener(listener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (!onTap) return;
    const listener = naver.maps.Event.addListener(element.marker, 'tap', onTap);

    return () => {
      if (!onTap) return;

      naver.maps.Event.removeListener(listener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (!onMouseout) return;
    const listener = naver.maps.Event.addListener(
      element.marker,
      'mouseout',
      onMouseout
    );

    return () => {
      if (!onMouseout) return;

      naver.maps.Event.removeListener(listener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (!onMouseover) return;
    const listener = naver.maps.Event.addListener(
      element.marker,
      'mouseover',
      onMouseover
    );

    return () => {
      if (!onMouseover) return;

      naver.maps.Event.removeListener(listener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>{children}</div>;
}

export default EventTarget;
