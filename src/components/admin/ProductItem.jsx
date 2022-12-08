import React from 'react';

export default function ProductItem({ item, idx }) {
  return (
    <li key={item.id}>
      <span>
        <input type='checkbox' name='' id='' />
      </span>
      <span>{idx}</span>
      <span>{item.title}</span>
      <span>{item.price}</span>
      <spane>{item.isSoldOut}</spane>
    </li>
  );
}
