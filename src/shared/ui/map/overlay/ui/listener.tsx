import { useEffect } from 'react';

import type { MapElement } from '../type';

type ListenerProps = {
  element: MapElement;
  eventName: string;
  fn: (...args: unknown[]) => void;
};

const useBindEvent = (
  element: MapElement,
  eventName: string,
  fn: VoidFunction
) => {
  useEffect(() => {
    const listener = naver.maps.Event.addListener(
      element,
      convertOnEventName(eventName),
      fn
    );

    return () => {
      naver.maps.Event.removeListener(listener);
    };
  }, [element, eventName, fn]);
};

function Listener({ element, eventName, fn }: ListenerProps) {
  useBindEvent(element, eventName, fn);

  return null;
}

export default Listener;

function convertOnEventName(eventName: string) {
  if (eventName.startsWith('on') && eventName.length > 2) {
    const rest = eventName.slice(2);
    return rest[0].toLowerCase() + rest.slice(1);
  }

  return eventName;
}
