import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import style from './NavbarItem.module.scss';

export default function NavbarItem({ page, title }) {
  const location = useLocation();
  return (
    <li className={location.pathname === page ? style.active : ''}>
      <Link to={page}>
        <span>{title}</span>
        <MdOutlineArrowForwardIos fontSize='12' color='rgb(95, 0, 128)' />
      </Link>
    </li>
  );
}
