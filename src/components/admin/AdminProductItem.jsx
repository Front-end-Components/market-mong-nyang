import { formatPrice } from '@/utils/formats';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from './AdminProductItem.module.scss';

export default function AdminProductItem({ item, idx }) {
  const navigate = useNavigate();

  return (
    <li key={item.id} className={style.container}>
      <input type='checkbox' name='' id='' />
      <div
        onClick={(event) => {
          if (event.target.type !== 'checkbox') {
            navigate(`/admin/product/${item.id}`);
          }
        }}
      >
        <span>{idx + 1}</span>
        <span>{item.tags}</span>
        <span>{item.title}</span>
        <span>{`${formatPrice(item.price)} 원`}</span>
        <span>{item.isSoldOut ? 'Y' : 'N'}</span>
      </div>
    </li>
  );
}
