import { formatDate } from '@/utils/formats';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminOrderItem({ item, idx }) {
  const navigate = useNavigate();

  return (
    <li
      key={item.id}
      onClick={() => {
        navigate(`/admin/order/${item.detailId}`, { state: { item } });
      }}
    >
      <span>
        <input type='checkbox' name='' id='' />
      </span>
      <span>{idx + 1}</span>
      <span>{item.product.title}</span>
      <span>{item.product.price}</span>
      <span>{item.user.displayName}</span>
      <span>{item.account.bankName}</span>
      <span>{formatDate(item.timePaid)}</span>
      <span>{item.isCanceled ? 'Y' : 'N'}</span>
      <span>{item.done ? 'Y' : 'N'}</span>
    </li>
  );
}
