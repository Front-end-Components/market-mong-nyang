import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import MypageHeader from '@/components/MypageHeader';
import style from './MyOrderDetail.module.scss';
import { selectOrder } from '@/api/requests';

export default async function MyOrderDetail() {
  let { item } = useLocation();
  console.log(useLocation());

  return (
    <div className={style.MyOrderDetail}>
      <MypageHeader name={'주문 상세정보'} />
      <div className={style.content}>
        <p>시험 중</p>
      </div>
    </div>
  );
}
