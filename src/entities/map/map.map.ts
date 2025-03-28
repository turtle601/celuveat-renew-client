export const getBoundaryParams = (bounds: naver.maps.Bounds) => {
  const min = bounds.getMin();
  const max = bounds.getMax();

  return {
    min: {
      lat: min.y,
      lng: min.x,
    },
    max: {
      lat: max.y,
      lng: max.x,
    },
  };
};
