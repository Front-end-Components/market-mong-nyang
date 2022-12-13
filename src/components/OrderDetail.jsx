import React from 'react';
import Button from '@/components/Button';
import style from '@/pages/MyOrderDetail.module.scss';
import { formatPrice } from '@/utils/formats';

export default function OrderDetail({ item }) {
  let stateText = '구매 완료'
  if(item.done) {
    stateText = '구매 확정';
  } else if (item.isCanceled) {
    stateText = '주문 취소';
  }
  let date = item.timePaid.substr(0, 10);
  return (
    <div className={style.content}>
      <p>연결중</p>
    </div>
  );
}