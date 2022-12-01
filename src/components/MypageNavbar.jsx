import React from 'react';

export default function MypageNavbar() {
  return (
    <div>
      <ul>
        <Link to='/mypage/order'>주문 내역</Link>
        <Link to='/mypage/account'>계좌 관리</Link>
        <Link to='/mypage/likes'>찜한 상품</Link>
        <Link to='/mypage/info'>개인 정보 수정</Link>
      </ul>
    </div>
  );
}
