import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import style from './MypageNavbar.module.scss';
import { MdOutlineArrowForwardIos } from 'react-icons/md';

export default function MypageNavbar() {
  const location = useLocation();
  return (
    <div className={style.mypage}>
      <h1>마이페이지</h1>
      <nav className={style.mypageNav}>
        <ul>
          <li className={location.pathname === '/mypage/order' ? style.active : ''}>
            <Link to='/mypage/order'>
              <span>주문 내역</span>
              <MdOutlineArrowForwardIos fontSize='12' color='rgb(95, 0, 128)' />
            </Link>
          </li>
          <li className={location.pathname === '/mypage/account' ? style.active : ''}>
            <Link to='/mypage/account'>
              <span>계좌 관리</span>
              <MdOutlineArrowForwardIos fontSize='12' color='rgb(95, 0, 128)' />
            </Link>
          </li>
          <li className={location.pathname === '/mypage/like' ? style.active : ''}>
            <Link to='/mypage/like'>
              <span>찜한 상품</span>
              <MdOutlineArrowForwardIos fontSize='12' color='rgb(95, 0, 128)' />
            </Link>
          </li>
          <li className={location.pathname === '/mypage/info' ? style.active : ''}>
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
