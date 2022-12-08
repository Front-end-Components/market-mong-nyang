import React from 'react';
import { useParams } from 'react-router-dom';
import MypageHeader from '../components/MypageHeader';
import style from './MyOrderDtail.module.scss';

export default function MyOrderDetail() {
  const { orderId } = useParams();
  return (
    <div className={style.MyOrderDetail}>
      <MypageHeader name={'주문 상세정보'} />
      <div className={style.content}>
      </div>
    </div>
  );
}
