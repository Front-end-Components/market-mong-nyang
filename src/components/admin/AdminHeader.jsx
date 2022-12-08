import React from 'react';
import { MdOutlineLogout } from 'react-icons/md';
import { Link } from 'react-router-dom';
import style from './AdminHeader.module.scss';
export default function AdminHeader() {
  return (
    <header className={style.adminHeader}>
      <Link to='/admin'>
        <img className={style.logo} src='/images/logo.png' alt='logo' />
        <h1 className={style.title}>마켓멍냥 ADMIN PAGE</h1>
      </Link>
      <button className={style.adminLogout}>
        <MdOutlineLogout size='20' title='logout' />
      </button>
    </header>
  );
}
