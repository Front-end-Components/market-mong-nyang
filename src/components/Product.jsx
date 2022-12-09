import React from 'react';
import style from './Product.module.scss';
import { Link } from 'react-router-dom';
import { formatPrice } from '@/utils/formats';

export default function Product(props) {

  // 가격 콤마 변환
  const price = props.products.price;
  // function setComma(originPrice) {
  //   if(originPrice){
  //     let result = originPrice.toLocaleString('ko-KR');
  //     return result;
  //   }
  // }

  return (
    <div className={style.products}>
      <Link to={"/products/" + props.products.id}>
        <img src={props.products.thumbnail} width="100%" alt={props.products.title}/>
        <h4 className={style.title}>{props.products.title}</h4>
        <p className={style.price}>{formatPrice(price)}원</p>
      </Link>
    </div>
  )
}