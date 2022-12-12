
import React from 'react';
import { Link } from 'react-router-dom';
import style from './Footer.module.scss';

export default function Footer() {
let date = new Date();
let year = date.getFullYear();

  return (
    <div className={style.footer}>
      아직 미완성
      <p className={style.copy}>© {year}. Front-end Components All rights reserved.</p>
    </div>
  )
}