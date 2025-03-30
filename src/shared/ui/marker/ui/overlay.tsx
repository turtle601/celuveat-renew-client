import React, { useEffect } from 'react';
import ReactDOMServer from 'react-dom/server';

import { useMap } from '../../../../entities/map/model';

import Marker from '../model/marker';

interface OverlayProps<T> {
  element: Marker<T>;
  view: React.ReactNode;
}

function Overlay<T>({ element, view }: OverlayProps<T>) {
  const nmap = useMap();

  useEffect(() => {
    element.marker.setIcon({
      content: ReactDOMServer.renderToString(view),
    });

    element.marker.setMap(nmap);

    return () => {
      element.marker.setMap(null);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [element.marker]);

  useEffect(() => {
    const listener = naver.maps.Event.addListener(nmap, 'idle', () => {
      const mapbounds = nmap?.getBounds();

      if (mapbounds?.hasPoint(element.marker.getPosition())) {
        element.marker.setMap(nmap);
      } else {
        element.marker.setMap(null);
      }
    });

    return () => {
      naver.maps.Event.removeListener(listener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <></>;
}

export default Overlay;
