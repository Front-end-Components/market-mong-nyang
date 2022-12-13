import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import MypageHeader from '../components/MypageHeader';
import style from './MyOrderDetail.module.scss';
import { selectOrder } from '@/api/requests';
import OrderDetail from '@/components/OrderDetail';

export default async function MyOrderDetail() {
  const { item } = useParams();
  let dispatch = useDispatch();
  
  // const id = location.state.item.detailId;
  // const detailID = {
  //   'detailId': id
  // }
  
  // const data = await selectOrder(detailID);

  return (
    <div className={style.MyOrderDetail}>
      <MypageHeader name={'주문 상세정보'} />
      <div className={style.content}></div>
    </div>
  );
}
