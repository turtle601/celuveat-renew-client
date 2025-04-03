import { useEffect } from 'react';
import ReactDOMServer from 'react-dom/server';

import { useMap } from '../../map/model';

import { MarkerModel } from '../model';

interface MarkerProps<T> {
  markerModel: MarkerModel<T>;
  click?: VoidFunction;
  mouseover?: VoidFunction;
  mouseout?: VoidFunction;
  children: React.ReactNode;
}

function Marker<T>({
  markerModel,
  click,
  mouseover,
  mouseout,
  children,
}: MarkerProps<T>) {
  const map = useMap();

  useEffect(() => {
    if (map) {
      markerModel.load({
        click,
        mouseover,
        mouseout,
      });

      markerModel.marker.setMap(map);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [markerModel, map]);

  useEffect(() => {
    markerModel.marker.setIcon({
      content: ReactDOMServer.renderToString(children),
    });

    if (markerModel.isFocus) {
      markerModel.marker.setZIndex(500);
    } else if (markerModel.isHover) {
      markerModel.marker.setZIndex(1000);
    } else {
      markerModel.marker.setZIndex(100);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [markerModel, markerModel.isFocus, markerModel.isHover]);

  return <></>;
}

export default Marker;
