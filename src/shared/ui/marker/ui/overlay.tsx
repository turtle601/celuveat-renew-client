import React, { useEffect } from 'react';

import { useMap } from '../../map/model';

import Marker from '../model/marker';

interface OverlayProps<T> {
  element: Marker<T>;
  children: React.ReactNode;
}

function Overlay<T>({ element }: OverlayProps<T>) {
  // const nmap = useMap();

  // useEffect(() => {
  //   if (nmap) {
  //     naver.maps.Event.addListener(nmap, 'idle', () => {
  //       const mapbounds = nmap?.getBounds();
  //       if (mapbounds?.hasPoint(element.marker.getPosition())) {
  //         element.marker.setMap(nmap);
  //       } else {
  //         element.marker.setMap(null);
  //       }
  //     });
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return <></>;
}

export default Overlay;
