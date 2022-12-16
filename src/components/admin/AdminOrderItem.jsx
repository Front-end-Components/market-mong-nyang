import { formatDate, formatPrice } from '@/utils/formats';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from './AdminOrderItem.module.scss';

export default function AdminOrderItem({ item, idx }) {
  const navigate = useNavigate();

  const test = [];

  return (
    <li key={item.id} className={style.container}>
      <input type='checkbox' name='' id='' />
      <div
        onClick={(event) => {
          if (event.target.type !== 'checkbox') {
            navigate(`/admin/order/${item.detailId}`, { state: { item } });
          }
        }}
      >
        <span>{idx + 1}</span>
        <span>{item.product.title}</span>
        <span>{`${formatPrice(item.product.price)} 원`}</span>
        <span>{item.user.displayName}</span>
        <span>{item.account.bankName}</span>
        <span>{formatDate(item.timePaid)}</span>
        <span>{item.isCanceled ? 'Y' : 'N'}</span>
        <span>{item.done ? 'Y' : 'N'}</span>
      </div>
    </li>
  );
}
