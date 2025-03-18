import { css } from '@emotion/react';

export const getResetStyle = () => {
  return css({
    '*': {
      padding: 0,
      margin: 0,
      border: 0,
      font: 'inherit',
      boxSizing: 'border-box',
      verticalAlign: 'baseline',
    },
    'html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video':
      {
        padding: 0,
        margin: 0,
        border: 0,
        font: 'inherit',
        boxSizing: 'border-box',
        verticalAlign: 'baseline',
      },
    'article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section':
      {
        display: 'block',
      },
    body: {
      margin: 0,
      lineHeight: 1,
    },
    'ol, ul, li': {
      listStyle: 'none',
    },
    'blockquote, q': {
      quotes: 'none',
    },
    'blockquote::before, blockquote::after, q::before, q::after': {
      content: "''",
    },
    input: {
      outline: 'none',
    },
    textarea: {
      outline: 'none',
    },
    table: {
      borderCollapse: 'collapse',
      borderSpacing: 0,
    },
  });
};
