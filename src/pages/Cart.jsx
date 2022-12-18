import React from 'react';
import style from './Cart.module.scss';
import MypageHeader from '../components/MypageHeader';
import CartList from '@/components/CartList';
import CartPrice from '@/components/CartPrice';

export default function Cart() {

  return (
    <div className={style.cart}>
      <MypageHeader name={'장바구니'} />
      <div className={style.container}>
        <CartList />
        <CartPrice />
      </div>
    </div>
  );
}
