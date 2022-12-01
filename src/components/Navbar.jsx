import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='flex flex-col items-center border-b shadow-md w-screen'>
      <div className='flex justify-end w-3/4'>
        <ul className='flex gap-3'>
          <li>
            <Link to='/signup'>회원가입</Link>
          </li>
          <li>
            <Link to='/login'>로그인</Link>
          </li>
          <li>
            <Link to='/service'>고객센터</Link>
          </li>
        </ul>
      </div>
      <div className='flex justify-between items-center w-3/4'>
        <Link to='/'>
          <div className='flex items-center'>
            <img className='w-14' src='/images/logo.png' alt='logo' />
            <h1 className='ml-3'>Market Mong Nyang</h1>
          </div>
        </Link>
        <div>
          <input type='text' placeholder='검색어를 입력해 주세요' />
        </div>
        <div>
          <ul className='flex gap-3'>
            <li>
              <Link to='/likes'>찜목록</Link>
            </li>
            <li>
              <Link to='/cart'>장바구니</Link>
            </li>
          </ul>
        </div>
      </div>
      <nav className='flex justify-between w-3/4'>
        <ul>
          <li>
            <Link to=''>카테고리</Link>
          </li>
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
