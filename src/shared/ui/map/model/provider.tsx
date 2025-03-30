import { useEffect, useState } from 'react';

import { NaverMapContext } from '.';

interface MapProviderProps {
  children: React.ReactNode;
}

function Provider({ children }: MapProviderProps) {
  const [map, setMap] = useState<naver.maps.Map | null>(null);

  useEffect(() => {
    const mapInstance = new naver.maps.Map('map', {
      center: new naver.maps.LatLng(37.511337, 127.012084),
      zoom: 13,
    });

    setMap(mapInstance);
  }, []);

  return (
    <NaverMapContext.Provider value={map}>{children}</NaverMapContext.Provider>
  );
}

export default Provider;
