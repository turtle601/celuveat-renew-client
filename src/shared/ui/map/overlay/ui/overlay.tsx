import { useEffect } from 'react';
import { useMap } from '../../model';

import type { MapElement } from '../type';

interface OverlayProps {
  element: MapElement;
  children: React.ReactNode;
}

function Overlay({ element, children }: OverlayProps) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    element.setMap(map);

    return () => {
      if (!map) return;

      element.setMap(null);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map]);

  return <>{children}</>;
}

export default Overlay;
