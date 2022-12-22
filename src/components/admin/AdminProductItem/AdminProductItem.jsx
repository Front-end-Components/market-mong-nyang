import { formatPrice } from '@/utils/formats';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from './AdminProductItem.module.scss';

export default function AdminProductItem({ item, idx, handleCheck, checkId }) {
  const navigate = useNavigate();

  return (
    <li className={style.container}>
      <input
        type="checkbox"
        className="check"
        onChange={(e) => handleCheck(e.target.checked, item.id)}
        checked={checkId.includes(item.id) ? true : false}
      />
      <div
        onClick={(event) => {
          if (event.target.type !== 'checkbox') {
            navigate(`/admin/products/${item.id}`);
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
