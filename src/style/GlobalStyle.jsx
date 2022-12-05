import React from 'react';
import { Global, css } from '@emotion/react';
import reset from 'emotion-reset';
import theme from './theme';

export const GlobalStyle = () => <Global styles={style} />;

const style = css`
  ${reset}
  *, *::after, *::before {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: 'Noto Sans KR', dotum, sans-serif;
  }
  a {
    color: ${theme.color.black};
    text-decoration: none;
  }
`;
