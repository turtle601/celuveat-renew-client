export interface MapElement {
  getMap: () => naver.maps.Map | null;
  setMap: (map: naver.maps.Map | null) => void;
}
