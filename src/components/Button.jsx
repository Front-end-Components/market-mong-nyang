import React from 'react';
import style from './Button.module.scss';

export default function Button({ name, onClick, disabled, isPurple }) {
  return (
    <button className={isPurple ? style.purple : style.white} onClick={onClick} disabled={disabled}>
      <span>{name}</span>
    </button>
  );
}
