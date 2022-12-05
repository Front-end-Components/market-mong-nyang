import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export default function MypageHeader({ name }) {
  return (
    <div css={headerStyle}>
      <h1>{name}</h1>
    </div>
  );
}

const headerStyle = css`
  border-bottom: 2px solid rgb(51, 51, 51);
  padding-bottom: 2rem;
  h1 {
    font-size: 1.4rem;
    font-weight: 800;
    color: rgb(51, 51, 51);
  }
`;
