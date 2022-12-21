import React from 'react';
import style from './Button.module.scss';

export default function Button({ name, onClick, type, disabled, isPurple, display, width }) {
  return (
    <button
      type={type ?? 'button'}
      className={`${style.button} ${isPurple ? style.purple : style.white} ${
        display ? style.displayNone : ''
      }`}
      onClick={onClick}
      disabled={disabled}
      style={{ width: width }}
    >
      <span>{name}</span>
    </button>
  );
}
