import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Banner from '../components/Banner';
import Products from '../components/Products';
import theme from './../style/theme';

export default function Home() {
  return (
    <div css={containerStyle}>
      <Banner />
      <Products />
    </div>
  );
}

const containerStyle = css`
  width: ${theme.size.widthInner};
`;
