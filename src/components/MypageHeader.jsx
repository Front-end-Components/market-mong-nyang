import React from 'react';
import style from './MypageHeader.module.scss';

export default function MypageHeader({ name }) {
  return (
    <div className={style.header}>
      <h1>{name}</h1>
    </div>
  );
}
