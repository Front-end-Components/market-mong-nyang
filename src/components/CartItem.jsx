import React from 'react';
import { useState } from 'react';
import style from './CartItem.module.scss';
import { formatPrice } from '@/utils/formats';
// // import us from '@/store/userSlice';
import { increaseCount, deleteItem } from '@/store/cartSlice';
import { useDispatch } from "react-redux"

export default function CartItem({ item }) {
  const [count, setCount] = useState(item.count);
  let dispatch = useDispatch();

  return (
    <div className={style.cartitem}>
      <div className={style.infoarea}>
        <div className={style.checkbox}>
          <input type='checkbox' />
        </div>
        <div className={style.thumbnail}>
          <img src={item.thumbnail} alt={item.title} />
        </div>
        <div className={style.name}>{item.title}</div>
      </div>
      <div className={style.calcarea}>
        <div className={style.countwrap}>
        <div className={style.count}>
              <button onClick={() => {
                if(count === 1){
                  return 1;
                }
                setCount(count - 1);
              }}>-</button>
              <p>{count}</p>
              <button onClick={() => {
                setCount(count + 1);
              }}>+</button>
            {/* <button onClick={() => { dispatch(increaseCount())}}>+</button> */}
          </div>
        </div>
        <div className={style.price}>{formatPrice(item.price * count)} 원</div>
      </div>
    </div>
  );
}
