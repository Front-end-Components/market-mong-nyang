import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MypageHeader from '@/components/MypageHeader';
import style from './MyOrderDetail.module.scss';
import { selectOrder } from '@/api/requests';
import { formatPrice } from '@/utils/formats';

export default function MyOrderDetail() {
  const [orderDetail, setOrderDetail] = useState([]);
  const [orderProduct, setOrderProduct] = useState([]);
  const [orderAccount, setOrderAccount] = useState([]);
  const location = useLocation();

  const detailID = {
    'detailId': location.state
  };

  useEffect(() => {
    async function postData() {
      const data = await selectOrder(detailID);
      setOrderDetail(data);
      setOrderProduct(data.product);
      setOrderAccount(data.account);
    }
    postData();
  }, []);


  let stateText = '구매 완료'
  if(orderDetail.done) {
    stateText = '구매 확정';
  } else if (orderDetail.isCanceled) {
    stateText = '주문 취소';
  }

  let date = String(orderDetail.timePaid).substring(0, 10);
  // let productImg = `${orderDetail.product.thumbnail}`;
  const orderPrice = formatPrice(orderProduct.price);

  return (
    <div className={style.MyOrderDetail}>
      <MypageHeader name={'주문 상세정보 썸네일 교체해야함!!!'} />
      <div className={style.content}>
        <div className={style.orderDateNum}>
          <span className={style.orderDate}>주문 날짜 : <b>{date}</b></span>
          <span className={style.orderNum}>주문 번호 : {orderDetail.detailId}</span>
        </div>
        
        <div className={style.productContent}>
          <img src='https://storage.googleapis.com/heropy-api/vpOjQq7ZaSv093651.jpg' className={style.thumbnailImg}></img>
          <div className={style.productText}>
            <p className={style.productTitle}>{orderProduct.title}</p>
            <p>{orderPrice}원</p>
          </div>
          <div className={style.productState}>
            <p>{stateText}</p>
          </div>
          </div>

          <p className={style.accountTitle}>결제 정보</p>
          <div className={style.accountContent}>
            <p className={style.accountToolTitle}>결제 수단</p>
            <span className={style.accountBankName}>{orderAccount.bankName}</span>
            <span className={style.accountBankNum}>({orderAccount.accountNumber})</span>
          </div>
      </div>
    </div>
  );
}
