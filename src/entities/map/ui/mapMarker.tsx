import { useEffect, useState } from 'react';

import Overlay from './overlay';
import { useMapEventListener } from '../hooks';

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

  useMapEventListener(marker, 'mouseover', () => {
    if (mouseover) {
      mouseover(marker);
    }
  });

  useMapEventListener(marker, 'mouseout', () => {
    if (mouseout) {
      mouseout(marker);
    }
  });

  useMapEventListener(marker, 'tap', () => {
    if (tap) {
      tap(marker);
    }
  });

  useMapEventListener(marker, 'click', () => {
    if (click) {
      click(marker);
    }
  });

  useEffect(() => {
    if (marker) {
      load(marker);
    }
  }, [load, marker]);

  return <Overlay element={marker} />;
}

export default Marker;
