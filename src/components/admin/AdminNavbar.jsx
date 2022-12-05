import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import theme from './../../style/theme';

export default function AdminNavbar() {
  return (
    <nav css={adminNavbarStyle}>
      <Link to='/admin'> 대시 보드</Link>
      <Link to='/admin/products'> 상품 관리</Link>
      <Link to='/admin/order'> 거래 내역 관리</Link>
    </nav>
  );
}

const adminNavbarStyle = css`
  width: 20vw;
  height: 90vh;
  background-color: ${theme.color.purple};
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  gap: 2rem;
  box-sizing: border-box;
  padding: 2rem;
  a {
    color: ${theme.color.white};
    font-weight: 500;
  }
`;
