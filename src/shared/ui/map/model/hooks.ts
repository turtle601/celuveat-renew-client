import { useContext } from 'react';

import { NaverMapContext } from './context';

export const useMap: () => naver.maps.Map | null = () => {
  const state = useContext(NaverMapContext);

  return state;
};
