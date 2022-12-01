import React from 'react';
import { Outlet } from 'react-router-dom';
import MypageNavbar from '../components/MypageNavbar';

export default function Mypage() {
  return (
    <div>
      <MypageNavbar />
      Mypage
      <Outlet />
    </div>
  );
}
