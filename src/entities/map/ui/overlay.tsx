import { useEffect } from 'react';
import { useMap } from '../model';

type MapElementType = {
  setMap(map: naver.maps.Map | null): void;
  getMap(): naver.maps.Map | null;
};

interface OverlayProps {
  element: MapElementType;
  children?: React.ReactNode;
  autoMount?: boolean;
}

function Overlay(props: OverlayProps) {
  const { element, children, autoMount = true } = props;
  const nmap = useMap();

  useEffect(() => {
    if (!autoMount) {
      return;
    }

    if (element.getMap() === nmap) {
      return;
    }

    element.setMap(nmap ? nmap : null);

    return () => {
      element.setMap(null);
    };
  }, [autoMount, element, nmap]);

  return <div>{children}</div>;
}

export default Overlay;
