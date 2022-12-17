import React from 'react';
import CartItem from '../components/CartItem';
import style from './CartList.module.scss';
import { useSelector } from 'react-redux';
import { formatPrice } from '@/utils/formats';

export default function CartList() {
  let list = useSelector((state) => state.cart);
  console.log(list);

  // 체크 된 항목 찾기
  const checkedList = list.filter(item => item.checked === true);
  console.log('checkedList :', checkedList);

  return (
    <div className={style.cartlist}>
        {/* <button className={style.delbtn}>선택 삭제</button>
        <button className={style.alldelbtn}>전체 삭제</button> */}
        {
        list.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })
        }
    </div>
  );
}