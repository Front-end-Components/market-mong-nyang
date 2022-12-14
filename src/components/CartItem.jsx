import React from 'react';
import style from './CartItem.module.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { formatPrice } from '@/utils/formats';

export default function CartItem({ item }) {
  const [count, setCount] = useState(item.count);

  return (
    <div className={style.cartitem}>
      <div className={style.infoarea}>
        <div className={style.checkbox}>
          <input type='checkbox' />
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
                if(count === 1){
                  return 1;
                }
                setCount(count - 1);
              }}>-</button>
              <p>{count}</p>
              <button onClick={() => {
                setCount(count + 1);
              }}>+</button>
          </div>
        </div>
        <div className={style.price}>{formatPrice(item.price * count)} 원</div>
      </div>
    </div>
  );
}
