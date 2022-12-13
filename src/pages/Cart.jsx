import React from 'react';
import MypageHeader from '../components/MypageHeader';
import CartItem from '../components/CartItem';
import style from './Cart.module.scss';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

export default function Cart() {
  const list = useSelector((state) => state.cart);

  useEffect(() => {
    let cartItem = localStorage.getItem('persist:root');
    cartItem = JSON.parse(cartItem);
    console.log(JSON.parse(cartItem.cart));
  }, [])

  return (
    <div className={style.cart}>
      <MypageHeader name={'장바구니'} />
      <div className={style.container}>
        <button className={style.delbtn}>선택 삭제</button>
        <button className={style.alldelbtn}>전체 삭제</button>
        {list.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
}
