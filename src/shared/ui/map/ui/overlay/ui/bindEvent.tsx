import Listener from './listener';

import type { MapElement } from '../type';

type BindEventProps = {
  element: MapElement;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  listeners?: Record<string, (...args: any[]) => any>;
};

function BindEvent({ element, listeners }: BindEventProps) {
  return (
    <>
      {listeners &&
        Object.entries(listeners).map(
          ([eventName, fn]) =>
            fn && (
              <Listener
                key={eventName}
                element={element}
                eventName={eventName}
                fn={fn}
              />
            )
        )}
    </>
  );
}

export default BindEvent;
