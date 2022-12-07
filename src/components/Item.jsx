import React from 'react';
import style from './Item.module.scss';

export default function Item(props) {

  // 가격 콤마
  const price = props.item.price;
  const priceComma = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

  return (
    <div className={style.item}>
      <img src={props.item.thumbnail} width="100%" alt={props.item.title}/>
      <h4 className={style.title}>{props.item.title}</h4>
      <p className={style.price}>{priceComma}원</p>
    </div>
  )
}