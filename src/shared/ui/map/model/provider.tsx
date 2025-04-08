import { useState, useEffect } from 'react';
import { NaverMapContext } from '.';
import { DEFAULT_COODINATE } from '../../../constant/map';
import { useMapScript } from './useMapScript';

interface MapProviderProps {
  children: React.ReactNode;
}

function Provider({ children }: MapProviderProps) {
  const [map, setMap] = useState<naver.maps.Map | null>(null);
  const { isLoaded } = useMapScript();

  useEffect(() => {
    if (!isLoaded) return;
    if (!window.naver || !window.naver.maps) return;

    const mapInstance = new window.naver.maps.Map('map', {
      center: new window.naver.maps.LatLng(
        DEFAULT_COODINATE.lat,
        DEFAULT_COODINATE.lng
      ),
      zoom: 13,
    });
    setMap(mapInstance);
  }, [isLoaded]);

  return (
    <NaverMapContext.Provider value={map}>{children}</NaverMapContext.Provider>
  );
}

export default Provider;
