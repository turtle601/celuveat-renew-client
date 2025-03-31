export interface Boundary {
  min: {
    lat: number;
    lng: number;
  };
  max: {
    lat: number;
    lng: number;
  };
}

export const getBoundaryParams = (bounds?: naver.maps.Bounds): Boundary => {
  if (!bounds)
    return {
      min: {
        lat: 37.4414504,
        lng: 126.9400721,
      },
      max: {
        lat: 37.5811582,
        lng: 127.0840959,
      },
    };

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
