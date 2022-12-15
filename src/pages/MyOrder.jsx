import React, { useEffect, useState } from 'react';
import style from './MyOrder.module.scss';
import MypageHeader from '../components/MypageHeader';
import { getListOrder } from '@/api/requests';
import Order from '@/components/Order';


export default function MyOrder() {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    async function getData() {
      const data = await getListOrder();
      setDetails(data);
    }
    getData();
  }, []);
  
  return (
    <div className={style.myOrder}>
    <MypageHeader name={'주문 내역 (썸네일 -> null)'} />

    {Array.isArray(details) ? (
    details.map((item) => {
      return <Order item={item} />;
    })
  ) : (
    <p>구매하신 상품이 없습니다.</p>
  )}
    </div>
  );
}

