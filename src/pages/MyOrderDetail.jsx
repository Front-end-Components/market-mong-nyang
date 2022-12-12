import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MypageHeader from '../components/MypageHeader';
import style from './MyOrderDetail.module.scss';
import { selectOrder } from '@/api/requests';
import OrderDetail from '@/components/OrderDetail';

export default function MyOrderDetail() {
  let { orderId } = useParams();
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    async function getData() {
      const detailID = {
        'detailId': orderId
      };

      const data = await selectOrder(detailID);
      setDetail(data);
    }
    getData();

  }, [orderId]);

  console.log(useParams().id);
  return (
    <div className={style.MyOrderDetail}>
      <MypageHeader name={'주문 상세정보'} />
      
      {(
        detail.map((item) => {
          return <OrderDetail key={item.id} item={item} />
        })
      )};
    </div>
  );
}
