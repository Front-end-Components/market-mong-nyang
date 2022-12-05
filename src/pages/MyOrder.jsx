import React from 'react';
import style from './MyOrder.module.scss';
import MypageHeader from '../components/MypageHeader';

export default function MyOrder() {
  return (
    <div className={style.myLike}>
      <MypageHeader name={'주문 내역'} />
      <div className={style.content}>
      </div>
    </div>
  );
}
