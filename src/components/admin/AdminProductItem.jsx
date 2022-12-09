import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminProductItem({ item, idx }) {
  const navigate = useNavigate();

  return (
    <li
      key={item.id}
      onClick={() => {
        navigate(`/admin/product/${item.id}`, { state: { item } });
      }}
    >
      <span>
        <input type='checkbox' name='' id='' />
      </span>
      <span>{idx}</span>
      <span>{item.title}</span>
      <span>{item.price}</span>
      <span>{item.isSoldOut}</span>
    </li>
  );
}
