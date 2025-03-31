import { CSSObject } from '@emotion/react';
import { borderRadius, color } from 'ik-ui-library';

export const getCommonBtnStyle = (): CSSObject => {
  return {
    width: '28px',
    height: '28px',
    borderRadius: borderRadius.sm,
    background: 'transparent',
    transition: 'background-color .5s ease',
    cursor: 'pointer',
  };
};

export const getActiveNumBtnStyle = (): CSSObject => {
  return {
    backgroundColor: color['primary-4'],
    color: color.white,
  };
};

export const getNumBtnStyle = (): CSSObject => {
  return {
    backgroundColor: color.gray150,
    color: color.gray350,
  };
};

export const getHoverBtnStyle = (): CSSObject => {
  return {
    '&:hover': {
      backgroundColor: color.gray200,
      color: color['primary-4'],
      '&:disabled': {
        backgroundColor: 'transparent',
        color: color.gray200,
      },
    },
  };
};

export const getDisableBtnStyle = (): CSSObject => {
  return {
    '&:disabled': {
      cursor: 'not-allowed',
    },
  };
};
