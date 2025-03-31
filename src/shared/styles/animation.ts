import { keyframes } from '@emotion/react';
import { color } from 'ik-ui-library';

const colorChange = keyframes`
  0% {
    background-color: ${color.gray100};
  }
  100% {
    background-color: ${color.gray300};
  }
`;

export const paintSkeleton = () => {
  return {
    animation: `${colorChange} 1s ease-in-out infinite alternate`,
  };
};
