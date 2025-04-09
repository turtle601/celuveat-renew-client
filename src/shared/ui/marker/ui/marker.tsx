import { forwardRef, useImperativeHandle, useState } from 'react';
import { BindEvent, Overlay } from '../../map';

export type uiEvents = [
  'mousedown',
  'mouseup',
  'click',
  'dblclick',
  'rightclick',
  'mouseover',
  'mouseout',
  'dragstart',
  'drag',
  'dragend'
];

export type UIEventHandlers<Events extends readonly string[]> = Partial<
  Record<
    `on${Capitalize<Events[number]>}`,
    (e: naver.maps.PointerEvent) => void
  >
>;

type MarkerProps = {
  options: Omit<naver.maps.MarkerOptions, 'map'>;
  events?: UIEventHandlers<uiEvents>;
};

const Marker = forwardRef<naver.maps.Marker, MarkerProps>((props, ref) => {
  const [marker] = useState(() => new naver.maps.Marker(props.options));
  useImperativeHandle(ref, () => marker);

  return (
    <Overlay element={marker}>
      <BindEvent element={marker} listeners={props.events} />
    </Overlay>
  );
});

export default Marker;
