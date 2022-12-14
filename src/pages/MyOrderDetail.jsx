import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MypageHeader from '@/components/MypageHeader';
import style from './MyOrderDetail.module.scss';
import { selectOrder } from '@/api/requests';

export default function MyOrderDetail() {
  const [orderDetail, setOrderDetail] = useState([]);
  
  const location = useLocation();
  const detailID = {
    'detailId': location.state
  };

  useEffect(() => {
    async function postData() {
      const data = await selectOrder(detailID)
      setOrderDetail(data);
    }
    postData();
  }, []);

  let date = String(orderDetail.timePaid).substring(0, 10);


  return (
    <div className={style.MyOrderDetail}>
      <MypageHeader name={'주문 상세정보 test'} />
      <div className={style.content}>
        <span className={style.orderDate}>주문 날짜 : <b>{date}</b></span>
        <span className={style.orderNum}>주문 번호 : {orderDetail.detailId}</span>
      </div>
    </div>
  );
}
