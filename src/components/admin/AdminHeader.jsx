import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import theme from './../../style/theme';

export default function AdminHeader() {
  return (
    <header css={adminHeaderStyle}>
      <Link to='/admin'>
        <img src='/images/logo.png' alt='logo' />
        <h1>마켓멍냥 Admin Page</h1>
      </Link>
      <button>Logout</button>
    </header>
  );
}

const adminHeaderStyle = css`
  width: 100vw;
  height: 10vh;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  box-shadow: ${theme.shadow.default};
  justify-content: space-between;
  padding: 0 3rem;
  a {
    display: flex;
    align-items: center;
    gap: 1rem;
    box-sizing: border-box;
    img {
      width: 40px;
    }
    h1 {
      font-size: 1.1rem;
      font-weight: 600;
      color: ${theme.color.purple};
    }
  }
  button {
    outline: none;
    background-color: transparent;
    border: none;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
  }
`;
