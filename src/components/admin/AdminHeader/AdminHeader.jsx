import { requestLogout } from '@/api/userAPI';
import { initOrderStore } from '@/store/adminOrdersSlice';
import { initProductsStore } from '@/store/adminProductsSlice';
import { setIsAdmin, setUserInit } from '@/store/userSlice';
import React from 'react';
import { MdOutlineLogout } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import style from './AdminHeader.module.scss';

export default function AdminHeader() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    if (window.confirm('로그아웃 하시겠습니까?')) {
      try {
        await requestLogout();
        localStorage.removeItem('token');
        dispatch(setIsAdmin({ isAdmin: false }));
        dispatch(setUserInit());
        dispatch(initOrderStore());
        dispatch(initProductsStore());
        alert('로그아웃이 완료되었습니다.');
        navigate('/');
        window.location.reload();
      } catch {
        alert('로그아웃에 실패하였습니다.');
      }
    }
  };
  return (
    <header className={style.adminHeader}>
      <Link to="/admin">
        <img className={style.logo} src="/images/logo.png" alt="logo" />
        <h1 className={style.title}>마켓멍냥 ADMIN PAGE</h1>
      </Link>
      <button className={style.adminLogout} onClick={handleLogout}>
        <MdOutlineLogout size="20" title="logout" />
      </button>
    </header>
  );
}
