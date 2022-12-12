import React from 'react';
import { useState } from 'react';
import style from './CartItem.module.scss';
// import { useSelector } from 'react-redux';
import { formatPrice } from '@/utils/formats';

export default function CartItem(props) {
  console.log('hello');
  // console.log(props.list);
  // let list = useSelector((state) => state.cart);
  const price = props.list.price;
  const [count, setCount] = useState(1);


  return (
    <div className={style.cartitem}>
          <div className={style.infoarea}> 
            <div className={style.checkbox}><input type="checkbox" /></div>
            <div className={style.thumbnail}><img src={props.list.thumbnail} alt={props.list.title} /></div>
            <div className={style.name}>{props.list.title}</div>
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
            <div className={style.price}>{formatPrice(price)}원</div>
          </div>
    </div>
  );
};