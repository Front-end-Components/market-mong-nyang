import React from 'react';
import style from './Cart.module.scss';
import CartList from '@/components/CartList';

export default function Cart() {

  return (
    <div className={style.cart}>
      <CartList />
    </div>
  );
}
