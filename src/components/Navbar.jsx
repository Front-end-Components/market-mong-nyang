import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import { RxHamburgerMenu } from 'react-icons/rx';
import { BsCart2 } from 'react-icons/bs';
import { VscHeart } from 'react-icons/vsc';
import { BiSearch } from 'react-icons/bi';

export default function Header() {
  return (
    <header>
      <div className='service'>
        <Link to='/signup'>회원가입</Link>
        <Link to='/login'>로그인</Link>
      </div>
      <div className='search'>
        <div>
          <Link to='/'>
            <img className='logo' src='/images/logo.png' alt='logo' />
            <h1>마켓멍냥</h1>
          </Link>
        </div>
        <div className='input-wrap'>
          <input className='search-input' type='text' placeholder='검색어를 입력해 주세요' />
          <button className='search-btn' aria-label='submit'>
            <BiSearch size='24' color='rgb(95, 0, 128)' />
          </button>
        </div>
        <div className='links'>
          <Link to='/likes'>
            <VscHeart size='30' title='찜목록' />
          </Link>
          <Link to='/cart'>
            <BsCart2 size='30' title='장바구니' />
          </Link>
        </div>
      </div>
      <nav>
        <ul>
          <div className='hamberger'>
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
        </ul>
      </nav>
    </header>
  );
}
