import React from 'react';
import { Link } from 'react-router-dom';
import style from './MypageNavbar.module.scss';

export default function MypageNavbar() {
  return (
    <div className={style.mypage}>
      <h1>마이페이지</h1>
      <nav className={style.mypageNav}>
        <Link to='/mypage/order'>주문 내역</Link>
        <Link to='/mypage/account'>계좌 관리</Link>
        <Link to='/mypage/like'>찜한 상품</Link>
        <Link to='/mypage/info'>개인 정보 수정</Link>
      </nav>
    </div>
  );
}
