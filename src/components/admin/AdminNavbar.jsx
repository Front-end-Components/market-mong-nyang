import React from 'react';
import { Link } from 'react-router-dom';
import style from './AdminNavbar.module.scss';

export default function AdminNavbar() {
  return (
    <nav className={style.adminNavbar}>
      <Link to='/admin/products'>- 상품 관리</Link>
      <Link to='/admin/order'>- 거래 내역 관리</Link>
    </nav>
  );
}
