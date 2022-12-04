import React from 'react';
import { Outlet } from 'react-router-dom';
import MypageNavbar from '../components/MypageNavbar';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import theme from './../style/theme';

export default function Mypage() {
  return (
    <div css={mypageStyle}>
      <MypageNavbar />
      <div css={outletStyle}>
        <Outlet />
      </div>
    </div>
  );
}

const mypageStyle = css`
  display: flex;
  width: ${theme.size.widthInner};
  margin-top: 2rem;
`;

const outletStyle = css`
  width: 80%;
  margin-left: 2rem;
`;
