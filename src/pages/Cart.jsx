import React from 'react';
import { useState } from 'react';
import MypageHeader from '../components/MypageHeader';
// import CartItem from '../components/CartItem';
import style from './Cart.module.scss';
import { useSelector } from 'react-redux';
import { formatPrice } from '@/utils/formats';


export default function Cart() {
  let list = useSelector((state) => state.cart );
  console.log(list);

  const price = list.price;
  const [count, setCount] = useState(1);

  return (
    <div className={style.cart}>
     <MypageHeader name={'장바구니'} />
     <div className={style.container}>
      {
        list.map((a, i) => {
            // <CartItem i={i} />
            // console.log(i)
            <div className={style.cartitem}>
              <div className={style.infoarea}> 
                <div className={style.checkbox}><input type="checkbox" /></div>
                <div className={style.thumbnail}><img src={list[i].thumbnail} alt={list[i].title} /></div>
                <div className={style.name}>{list[i].title}</div>
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
        })
      }
     </div>
    </div>
  );
}
