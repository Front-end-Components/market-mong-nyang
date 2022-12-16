import React from 'react';
import MypageHeader from '../components/MypageHeader';
import CartItem from '../components/CartItem';
import style from './CartList.module.scss';
import Pagination from '@/components/Pagination';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export default function CartList() {
  // const [list, setList] = useState([]);
  let list = useSelector((state) => state.cart);
  console.log(list);
  // 로컬스토리지 값 가져오기
  // useEffect(() => {
  //   // let cartItem = localStorage.getItem('persist:root');
  //   cartItem = JSON.parse(cartItem);
  //   setList(JSON.parse(cartItem.cart));
  //   console.log(JSON.parse(cartItem.cart));
  // }, [])

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
    </div>
  );
}