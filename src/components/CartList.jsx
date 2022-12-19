import React from 'react';
import CartItem from '../components/CartItem';
import style from './CartList.module.scss';
import { useSelector } from 'react-redux';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import { BsCart2 } from 'react-icons/bs';

export default function CartList() {
  let list = useSelector((state) => state.cart);
  const navigate = useNavigate();
  console.log(list);

  // 체크 된 항목 찾기
  const checkedList = list.filter(item => item.checked === true);
  console.log('checkedList :', checkedList);
  
  return (
    <div className={style.cartlist}>
        { list.length > 0 ? 
        list.map((item) => {
          return <CartItem key={item.id} item={item} />;
        }) :
        <div className={style.empty}>
          <BsCart2 size='30' title='장바구니' color='rgb(95, 0, 128)' />
          <p>장바구니가 비었습니다.</p>
          <Button name={'쇼핑하러 가기'} onClick={() => {
        navigate('/');
      }}/>
        </div>
        }
      </div>
        );
}