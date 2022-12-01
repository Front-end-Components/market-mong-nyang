import React from 'react';
import { Outlet } from 'react-router-dom';
import MypageNavbar from '../components/MypageNavbar';
import style from './Mypage.module.scss';

export default function Mypage() {
  return (
    <div className={style.mypage}>
      <MypageNavbar />
      <Outlet />
    </div>
  );
}
