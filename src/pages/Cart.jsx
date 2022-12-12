import React from 'react';
import MypageHeader from '../components/MypageHeader';
import CartItem from '../components/CartItem';
import style from './Cart.module.scss';
import { useSelector } from 'react-redux';

export default function Cart() {
  const list = useSelector((state) => state.cart);

  return (
    <div className={style.cart}>
      <MypageHeader name={'장바구니'} />
      <div className={style.container}>
        {list.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
}
