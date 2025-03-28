import { useEffect } from 'react';

type Params = Parameters<typeof naver.maps.Event.addListener>;

export const useMapEventListener = (...params: Params) => {
  const [target, eventName, listener] = params;

  useEffect(() => {
    const eventFn = naver.maps.Event.addListener(target, eventName, listener);

    return () => {
      naver.maps.Event.removeListener(eventFn);
    };
  }, [eventName, listener, target]);
};
