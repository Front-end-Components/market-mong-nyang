import React from 'react';
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';
import { BsCart2 } from 'react-icons/bs';
import { VscHeart } from 'react-icons/vsc';
import { BiSearch } from 'react-icons/bi';
import { BsFillPersonFill } from 'react-icons/bs';
import style from './Navbar.module.scss';

export default function Header() {
  return (
    <header className={style.userHeader}>
      <div className={style.service}>
        <Link to='/signup'>회원가입</Link>
        <Link to='/login'>로그인</Link>
      </div>
      <div className={style.search}>
        <Link to='/'>
          <img className={style.logo} src='/images/logo.png' alt='logo' />
          <h1 className={style.title}>마켓멍냥</h1>
        </Link>
        <div className={style.inputWrap}>
          <input className={style.searchInput} type='text' placeholder='검색어를 입력해 주세요' />
          <button className={style.searchBtn} aria-label='submit'>
            <BiSearch size='24' color='rgb(95, 0, 128)' />
          </button>
        </div>
        <div className={style.links}>
          <Link to='/mypage/like'>
            <VscHeart size='30' title='찜목록' />
          </Link>
          <Link to='/cart'>
            <BsCart2 size='30' title='장바구니' />
          </Link>
          <Link to='/mypage/order'>
            <BsFillPersonFill size='30' title='마이페이지' color='rgb(95, 0, 128)' />
          </Link>
        </div>
      </div>
      <nav>
        <ul>
          <div className={style.hamberger}>
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
