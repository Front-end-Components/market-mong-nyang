import React from 'react';
import { Link } from 'react-router-dom';
import style from './AdminHeader.module.scss';

export default function AdminHeader() {
  return (
    <header className={style.adminHeader}>
      <Link to='/admin/dashboard'>
        <img className={style.logo} src='/images/logo.png' alt='logo' />
        <h1 className={style.title}>마켓멍냥 Admin Page</h1>
      </Link>
      <button className={style.adminLogout}>Logout</button>
    </header>
  );
}
