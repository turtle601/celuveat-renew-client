import { useEffect, useState } from 'react';

import { NaverMapContext } from '.';
import { DEFAULT_COODINATE } from '../../../constant/map';

interface MapProviderProps {
  children: React.ReactNode;
}

function Provider({ children }: MapProviderProps) {
  const [map, setMap] = useState<naver.maps.Map | null>(null);

  useEffect(() => {
    const mapInstance = new naver.maps.Map('map', {
      center: new naver.maps.LatLng(
        DEFAULT_COODINATE.lat,
        DEFAULT_COODINATE.lng
      ),
      zoom: 13,
    });

    setMap(mapInstance);
  }, []);

  return (
    <NaverMapContext.Provider value={map}>{children}</NaverMapContext.Provider>
  );
}

export default Provider;
