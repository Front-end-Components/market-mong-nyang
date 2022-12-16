// import React from 'react';
// import style from './Button.module.scss';

// export default function Button({ name, onClick, disabled, isPurple, display }) {
//   return (
//     <button className={`${isPurple ? style.purple : style.white} ${display ? style.displayNone : ''}`} onClick={onClick} disabled={disabled}>
//       <span>{name}</span>
//     </button>
//   );
// }

import React from "react";
import style from "./Button.module.scss";

export default function Button({ name, onClick, disabled, isPurple, display }) {
  return (
    <button
      className={`${style.button} ${isPurple ? style.purple : style.white} ${
        display ? style.displayNone : ""
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      <span>{name}</span>
    </button>
  );
}
