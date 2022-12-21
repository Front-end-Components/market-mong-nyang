import React from 'react';
import style from './MypageNavbar.module.scss';
import NavbarItem from '@/components/Nav/NavbarItem/NavbarItem';

export default function MypageNavbar() {
  return (
    <div className={style.mypage}>
      <h1>마이페이지</h1>
      <nav className={style.mypageNav}>
        <ul>
          <NavbarItem page={'/mypage/order'} title={'주문 내역'} />
          <NavbarItem page={'/mypage/account'} title={'계좌 관리'} />
          <NavbarItem page={'/mypage/like'} title={'찜한 상품'} />
          <NavbarItem page={'/mypage/info'} title={'개인 정보 수정'} />
        </ul>
      </nav>
    </div>
  );
}
