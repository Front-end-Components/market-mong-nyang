import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import style from './MyOrder.module.scss';
import MypageHeader from '../components/MypageHeader';
import {selectListOrder} from '../api/requests.js';
import Button from '@/components/Button';

export default function MyOrder() {
  let detailsRes = selectListOrder();
  console.log(detailsRes);

  const location = useLocation();
  return (
    <div className={style.myOrder}>
    <MypageHeader name={'주문 내역 (예시 임돵)'} />
    <div className={style.content}>
      <div className={style.orderContent}>
        <div className={style.imgContent}>
          <img src='https://cdn-pro-web-241-106-godomall.spdycdn.net/bienbien3_godomall_com/data/goods/22/11/48/1000000897/1000000897_main_086.jpg' className={style.orderImg}></img>
        </div>
        <div className={style.textContent}>
          <p className={location.pathname === '/mypage/order/id'}>
            <Link to='/mypage/order/id'>
            <span className={style.productName}>상품이름 (클릭하면 상세 페이지로 긔긔)</span>
            </Link>
            </p>
          <p className={style.orderPrice}>상품 가격</p>
          <p className={style.orderDate}>구매 날짜</p>
          <p className={style.orderState}>구매 완료 (임시)</p>
          <p className={style.orderGuide}>구매가 완료 되었습니다.</p>
          <p className={style.orderGuide}>구매 확정 이후에는 주문 취소가 불가능합니다.</p>
        </div>
        <div className={style.btnContent}>
          <Button className={style.orderCancel} name={'주문 취소'} />
          <Button className={style.orderOk} name={'구매 확정'} isPurple={true} />
        </div>
      </div>
    </div>
    </div>
  );
}

