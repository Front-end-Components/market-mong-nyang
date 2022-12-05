import React from 'react';
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';
import { BsCart2 } from 'react-icons/bs';
import { VscHeart } from 'react-icons/vsc';
import { BiSearch } from 'react-icons/bi';
import { BsFillPersonFill } from 'react-icons/bs';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import theme from './../style/theme';

export default function Header() {
  return (
    <header css={userHeaderStyle}>
      <div css={serviceStyle}>
        <Link to='/signup'>회원가입</Link>
        <Link to='/login'>로그인</Link>
      </div>
      <div css={searchStyle}>
        <Link to='/'>
          <img src='/images/logo.png' alt='logo' />
          <h1>마켓멍냥</h1>
        </Link>
        <div css={inputWrapStyle}>
          <input className='search-input' type='text' placeholder='검색어를 입력해 주세요' />
          <button className='search-btn' aria-label='submit'>
            <BiSearch size='24' color='rgb(95, 0, 128)' />
          </button>
        </div>
        <div>
          <Link to='/mypage/like'>
            <VscHeart size='30' title='찜목록' />
          </Link>
          <Link to='/cart'>
            <BsCart2 size='30' title='장바구니' />
          </Link>
          <Link to='/mypage'>
            <BsFillPersonFill size='30' title='마이페이지' color='rgb(95, 0, 128)' />
          </Link>
        </div>
      </div>
      <nav>
        <ul css={linkStyle}>
          <div className='hamberger' css={hambergerStyle}>
            <RxHamburgerMenu title='카테고리' />
            <Link to=''>카테고리</Link>
          </div>
          <li>
            <Link to='/new'>신상품</Link>
          </li>
          <li>
            <Link to='/best'>베스트</Link>
          </li>
          <li>
            <Link to='/sale'>알뜰쇼핑</Link>
          </li>
          <li>
            <Link to='/admin'>관리자페이지</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

const userHeaderStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid lightgray;
  box-shadow: ${theme.shadow.default};
  width: 100vw;
  nav {
    width: ${theme.size.widthInner};
    ul {
      display: flex;
      justify-content: space-between;
      height: 4rem;
      align-items: center;
      font-weight: 600;
    }
  }
`;

const hambergerStyle = css`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const serviceStyle = css`
  width: ${theme.size.widthInner};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  height: 2.6rem;
  font-size: 12px;
  a {
    &:first-of-type {
      color: ${theme.color.purple};
      &::after {
        content: ' ';
        display: inline-block;
        width: 1px;
        height: 11px;
        margin-left: 12px;
        background-color: rgb(217, 217, 217);
      }
    }
    color: ${theme.color.black};
    font-weight: 600;
  }
`;

const searchStyle = css`
  width: ${theme.size.widthInner};
  display: flex;
  justify-content: space-between;
  display: flex;
  align-items: center;
  gap: 1rem;
  a {
    display: flex;
    align-items: center;
    gap: 1rem;
    img {
      width: 50px;
    }
    h1 {
      font-size: 18px;
      font-weight: 600;
      color: ${theme.color.purple};
    }
  }
`;

const inputWrapStyle = css`
  position: relative;
  input {
    width: 24rem;
    font-size: 16px;
    outline: none;
    border: 1px solid ${theme.color.purple};
    border-radius: 6px;
    padding: 0.8rem;
  }
  button {
    border: none;
    background-color: transparent;
    position: absolute;
    outline: none;
    top: 2px;
    right: 0;
    padding: 0.6rem;
    cursor: pointer;
  }
`;

const linkStyle = css`
  display: flex;
  align-items: center;
  gap: 1.4rem;
`;
