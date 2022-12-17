import React from 'react';
import MypageHeader from '../components/MypageHeader';
import CartItem from '../components/CartItem';
import style from './CartList.module.scss';
import { useSelector } from 'react-redux';
import Button from '@/components/Button';

export default function CartList() {
  let list = useSelector((state) => state.cart);
  console.log(list);

  return (
    <div className={style.cartlist}>
      <MypageHeader name={'장바구니'} />
      <div className={style.container}>
        {/* <button className={style.delbtn}>선택 삭제</button>
        <button className={style.alldelbtn}>전체 삭제</button> */}
        {list.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })}
      </div>
      <Button name={'주문하기'} isPurple={true} />
    </div>
  );
}