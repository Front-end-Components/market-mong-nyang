import React from 'react';
import style from './Account.module.scss';

import { formatPrice } from '@/utils/formats';

export default function Account({ item, idx }) {
  return (
    <div className={style.slide}>
    <div item={item.idx} key={idx} className={style.list}>
      <h4>{item.bankName}</h4>
      <p>{item.accountNumber}</p>
      <span>{formatPrice(item.balance)}</span>
    </div>
    </div>
  )
}