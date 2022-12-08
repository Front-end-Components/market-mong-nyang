import React from 'react';
import style from './ProductHeader.module.scss';

export default function ProductHeader({ name }) {

  return (
    <div className={style.header}>
      <h1>{name}</h1>
    </div>
  )
}