import React from "react";
import style from "./Button.module.scss";

export default function Button({
  name,
  onClick,
  disabled,
  isPurple,
  display,
  width,
}) {
  return (
    <button
      className={`${style.button} ${isPurple ? style.purple : style.white} ${
        display ? style.displayNone : ""
      }`}
      onClick={onClick}
      disabled={disabled}
      style={{ width: width }}
    >
      <span>{name}</span>
    </button>
  );
}
