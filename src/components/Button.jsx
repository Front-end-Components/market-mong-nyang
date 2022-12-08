import React from 'react';
import style from './Button.module.scss';

export default function Button({ name, onClick, disabled, color }) {
  return (
    <button className={color ? style.purple : style.white} onClick={onClick} disabled={disabled}>
      <span>{name}</span>
    </button>
  );
}
