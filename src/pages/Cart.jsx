import React from 'react';
import MypageHeader from '../components/MypageHeader';
import CartItem from '../components/CartItem';
import style from './Cart.module.scss';

export default function Cart() {

  return (
    <div className={style.cart}>
     <MypageHeader name={'장바구니'} />
     <div className={style.container}>
      <CartItem />
     </div>
    </div>
  );
}
