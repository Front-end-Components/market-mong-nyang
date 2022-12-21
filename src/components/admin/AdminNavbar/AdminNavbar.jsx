import React from 'react';
import NavbarItem from '@/components/Nav/NavbarItem/NavbarItem';
import style from './AdminNavbar.module.scss';

export default function AdminNavbar() {
  return (
    <nav className={style.adminNavbar}>
      <ul>
        <NavbarItem page={'/admin'} title={'대시 보드'} />
        <NavbarItem page={'/admin/products'} title={'상품 관리'} />
        <NavbarItem page={'/admin/order'} title={'거래 내역 관리'} />
      </ul>
    </nav>
  );
}
