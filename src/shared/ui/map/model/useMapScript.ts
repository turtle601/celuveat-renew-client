import { useEffect, useState } from 'react';

const NAVER_MAP_SCRIPT_ID = 'naver-map-script';

export const useMapScript = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (window.naver && window.naver.maps) {
      setIsLoaded(true);
      return;
    }

    const existingScript = document.getElementById(
      NAVER_MAP_SCRIPT_ID
    ) as HTMLScriptElement | null;
    if (existingScript) {
      setIsLoaded(true);
      return;
    }

    const script = document.createElement('script');
    script.id = NAVER_MAP_SCRIPT_ID;
    script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${
      import.meta.env.VITE_NAVER_MAP_CLIENT_ID
    }`;
    script.async = true;

    script.onload = () => {
      setIsLoaded(true);
    };

    script.onerror = () => {
      setIsLoaded(false);
    };

    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      setIsLoaded(false);
    };
  }, []);

  return {
    isLoaded,
  };
};
