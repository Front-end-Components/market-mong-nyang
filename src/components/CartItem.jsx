import React from 'react';
import style from './CartItem.module.scss';
import { RxCross1 } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import { formatPrice } from '@/utils/formats';
import { useDispatch } from "react-redux";
import { increaseCount, decreaseCount, deleteItem, checkedChange } from '@/store/cartSlice';

export default function CartItem({ item }) {  
  let dispatch = useDispatch();

  return (
    <div className={style.cartitem}>
      <div className={style.infoarea}>
        <div className={style.checkbox}>
          <input
          type='checkbox'
          checked={item.checked}
          onClick={() => dispatch(checkedChange(item.id))}
          />
        </div>
        <Link to={"/products/" + item.id}>
          <div className={style.thumbnail}>
            <img src={item.thumbnail} alt={item.title} />
          </div>
        </Link>
        <Link to={"/products/" + item.id}>
          <div className={style.name}>{item.title}</div>
        </Link>
      </div>
      <div className={style.calcarea}>
        <div className={style.countwrap}>
        <div className={style.count}>
              <button onClick={() => {
                dispatch(decreaseCount(item.id))
              }}>-</button>
              <p>{item.count}</p>
              <button onClick={() => {
                dispatch(increaseCount(item.id))
              }}>+</button>
          </div>
        </div>
        <div className={style.price}>{formatPrice(item.price * item.count)} 원</div>
          <button
          className={style.delete}
          onClick={() => {
          dispatch(deleteItem(item.id))
        }}
        >
          <RxCross1 size='15' title='장바구니' />
        </button>
      </div>
    </div>
  );
}
