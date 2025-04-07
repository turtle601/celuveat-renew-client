import { keyframes } from '@emotion/react';
import { borderRadius, color } from 'ik-ui-library';

const blink = keyframes`
  0%,
  80%,
  100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
`;

export const getDotStyle = () => {
  return {
    width: '12px',
    height: '12px',
    backgroundColor: color['primary-4'],
    borderRadius: '50%',
    animation: `${blink} 1.4s infinite both`,
  };
};

export const getDotsWrapperStyle = () => {
  return {
    width: '100px',
    height: '48px',
    backgroundColor: color.white,
    borderRadius: borderRadius.md,
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    '& > div + div': {
      marginLeft: '1rem',
    },
  };
};
