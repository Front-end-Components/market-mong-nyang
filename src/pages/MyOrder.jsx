import React, { useEffect, useState } from 'react';
import style from './MyOrder.module.scss';
import MypageHeader from '../components/MypageHeader';
import {selectListOrder} from '@/api/requests';
import Order from '@/components/Order'


export default function MyOrder() {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    async function getData() {
      const data = await selectListOrder();
      setDetails(data);
    }
    getData();
  }, []);

  return (
    <div className={style.myOrder}>
    <MypageHeader name={'주문 내역 (썸네일 교체해야 함 + 주문 상태)'} />

    {Array.isArray(details) ? (
    details.map((item) => {
      return <Order key={item.id} item={item} />;
    })
  ) : (
    <p>구매하시 상품이 없습니다.</p>
  )}
    </div>
  );
}

