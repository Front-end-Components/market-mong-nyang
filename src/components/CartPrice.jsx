import React from 'react'
import style from './CartPrice.module.scss'
import Button from '../components/Button';
import { formatPrice } from '@/utils/formats'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

export default function CartPrice() {
  const navigate = useNavigate();
  let list = useSelector((state) => state.cart);

  // 체크 된 항목 찾기
  const checkedList = list.filter(item => item.checked === true);
  
  // 체크 된 아이템의 총 가격
  let totalPrice = 0;
  list.filter(item => {
    if(item.checked === true){
    totalPrice += item.price * item.count;
    }
  });

  return (
    <div className={style.cartprice}>
      <div className={style.calcwrap}>
        <div className={style.orderprice}>
          <p className={style.title}>총 주문 금액</p>
          <p className={style.price}>{totalPrice > 0 ? formatPrice(totalPrice) : 0} 원</p>
        </div>
        <div className={style.discount}>
          <p className={style.title}>할인 금액</p>
          <p className={style.price}>0 원</p>
        </div>
        <div className={style.shipping}>
          <p className={style.title}>배송비</p>
          <p className={style.price}>0 원</p>
        </div>
      </div>
      <div className={style.total}>
        <p className={style.title}>총 결제 금액</p>
        <p className={style.price}>{totalPrice > 0 ? formatPrice(totalPrice) : 0}원</p>
      </div>
      <Button name={'결제하기'} isPurple={true} onClick={() => {
        navigate('/payment', {state: checkedList});
      }} />
    </div>
  )
}
