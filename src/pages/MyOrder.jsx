import React from 'react';
import style from './MyOrder.module.scss';
import MypageHeader from '../components/MypageHeader';
import {selectListOrder} from '../api/requests.js';

export default function MyOrder() {
  let detailsRes = selectListOrder();
  console.log(detailsRes);
  
  return (
    <div className={style.myLike}>
    <MypageHeader name={'주문 내역'} />
    <div className={style.content}>
    </div>
    </div>
  );
}

