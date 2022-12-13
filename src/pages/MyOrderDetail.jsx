import React, { useState } from 'react';
import { useLocation} from 'react-router-dom';
import MypageHeader from '@/components/MypageHeader';
import style from './MyOrderDetail.module.scss';
import { selectOrder } from '@/api/requests';
import { useEffect } from 'react';
import { formatPrice } from '@/utils/formats';

export default function MyOrderDetail() {
  const [orderDetail, setOrderDetail] = useState([]);
  let location = useLocation();
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

  let date = orderDetail.timePaid.substr(0, 10);
  let price = formatPrice(orderDetail.product.price);

  return (
    <div className={style.MyOrderDetail}>
      <MypageHeader name={'주문 상세정보 test'} />
      <div className={style.content}>
        <p className={style.orderDate}>주문 날짜 : {date}</p>
        <p>주문 번호 : {orderDetail.detailId}</p>
      </div>
    </div>
  );
}
