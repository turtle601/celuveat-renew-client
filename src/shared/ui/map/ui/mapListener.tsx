import { useCallback, useEffect } from 'react';
import { useMap } from '../model';

import { useCustomSearchParams } from '../../../hooks';

function MapListener() {
  const map = useMap();

  const { setSearchParams } = useCustomSearchParams();

  const handleMapClick = useCallback(() => {
    setSearchParams({
      focusId: null,
    });
  }, [setSearchParams]);

  useEffect(() => {
    if (!map) return;

    const listener1 = naver.maps.Event.addListener(
      map,
      'click',
      handleMapClick
    );
    const listener2 = naver.maps.Event.addListener(
      map,
      'dragstart',
      handleMapClick
    );

    return () => {
      naver.maps.Event.removeListener(listener1);
      naver.maps.Event.removeListener(listener2);
    };
  }, [handleMapClick, map]);

  return null;
}

export default MapListener;
