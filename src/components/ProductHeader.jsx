import React from 'react';
import style from './ProductHeader.module.scss';

export default function ProductHeader({ name, isMedium }) {

  return (
    <div className={`${style.header} ${isMedium ? style.medium : style.small}`}>
      <h1>{name}</h1>
    </div>
  )
}