import { useEffect, useState } from 'react';

import Overlay from './overlay';

interface MarkerProps {
  load: (marker?: naver.maps.Marker) => void;
  click?: (marker?: naver.maps.Marker) => void;
  mouseover?: (marker?: naver.maps.Marker) => void;
  mouseout?: (marker?: naver.maps.Marker) => void;
  tap?: (marker?: naver.maps.Marker) => void;
  options: naver.maps.MarkerOptions;
}

function Marker({
  options,
  load,
  click,
  mouseout,
  mouseover,
  tap,
}: MarkerProps) {
  const [marker] = useState(
    () =>
      new naver.maps.Marker({
        zIndex: 10,
        ...options,
      })
  );

  useEffect(() => {
    const listener1 = naver.maps.Event.addListener(marker, 'mouseover', () => {
      if (mouseover) {
        mouseover(marker);
      }
    });

    const listener2 = naver.maps.Event.addListener(marker, 'mouseout', () => {
      if (mouseout) {
        mouseout(marker);
      }
    });

    const listener3 = naver.maps.Event.addListener(marker, 'tap', () => {
      if (tap) {
        tap(marker);
      }
    });

    const listener4 = naver.maps.Event.addListener(marker, 'click', () => {
      if (click) {
        click(marker);
      }
    });

    return () => {
      naver.maps.Event.removeListener(listener1);
      naver.maps.Event.removeListener(listener2);
      naver.maps.Event.removeListener(listener3);
      naver.maps.Event.removeListener(listener4);
    };
  }, [marker, mouseout, mouseover, tap, click]);

  useEffect(() => {
    if (marker) {
      load(marker);
    }
  }, [load, marker]);

  return <Overlay element={marker} />;
}

export default Marker;
