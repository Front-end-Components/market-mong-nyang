import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MypageHeader from '../components/MypageHeader';
import style from './MyOrderDetail.module.scss';
import { selectOrder } from '@/api/requests';
import OrderDetail from '@/components/OrderDetail';

export default function MyOrderDetail() {
  let location = useLocation();
  const [detail, setDetail] = useState([]);

  const id = location.state.item.detailId;
  const detailID = {
    'detailId': id
  }
  
  async function postData(detailID) {
    const data = await selectOrder(detailID);
    // setDetail(data);
  }

  postData(detailID);

  return (
    <div className={style.MyOrderDetail}>
      <MypageHeader name={'주문 상세정보'} />
      
      {(
    detail.map((item) => {
      return <OrderDetail key={item.id} item={item} />;
    })
  )}
    </div>
  );
}
