import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import theme from './../style/theme';

export default function MypageNavbar() {
  const location = useLocation();
  return (
    <div css={mypageStyle}>
      <h1>마이페이지</h1>
      <nav css={navbarStyle}>
        <ul>
          <li css={location.pathname === '/mypage/order' ? activeStyle : ''}>
            <Link to='/mypage/order'>
              <span>주문 내역</span>
              <MdOutlineArrowForwardIos fontSize='12' color='rgb(95, 0, 128)' />
            </Link>
          </li>
          <li css={location.pathname === '/mypage/account' ? activeStyle : ''}>
            <Link to='/mypage/account'>
              <span>계좌 관리</span>
              <MdOutlineArrowForwardIos fontSize='12' color='rgb(95, 0, 128)' />
            </Link>
          </li>
          <li css={location.pathname === '/mypage/like' ? activeStyle : ''}>
            <Link to='/mypage/like'>
              <span>찜한 상품</span>
              <MdOutlineArrowForwardIos fontSize='12' color='rgb(95, 0, 128)' />
            </Link>
          </li>
          <li css={location.pathname === '/mypage/info' ? activeStyle : ''}>
            <Link to='/mypage/info'>
              <span>개인 정보 수정</span>
              <MdOutlineArrowForwardIos fontSize='12' color='rgb(95, 0, 128)' />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

const mypageStyle = css`
  width: 20%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  h1 {
    font-size: 1.6rem;
    font-weight: 800;
    color: rgb(51, 51, 51);
  }
`;

const navbarStyle = css`
  display: flex;
  flex-direction: column;
  ul {
    li {
      font-size: 0.9rem;
      border: 1px solid ${theme.color.lightgray};
      border-bottom: none;
      a {
        padding: 1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: inherit;
        cursor: pointer;
        &:hover {
          background-color: rgb(250, 250, 250);
          color: ${theme.color.purple};
          font-weight: 600;
        }
      }
      &:last-of-type {
        border-bottom: 1px solid ${theme.color.lightgray};
      }
    }
  }
`;

const activeStyle = css`
  background-color: rgb(250, 250, 250);
  color: ${theme.color.purple};
  font-weight: 600;
`;
