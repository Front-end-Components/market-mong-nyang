import React from 'react';
import style from './Product.module.scss';
import { Link } from 'react-router-dom';
import { formatPrice } from '@/utils/formats';

export default function Product({ products }) {
  const price = products.price;

  return (
    <div className={style.products}>
      <Link to={"/products/" + products.id}>
        <img src={products.thumbnail} width="100%" alt={products.title}/>
        <h4 className={style.title}>{products.title}</h4>
        <p className={style.price}>{formatPrice(price)}원</p>
      </Link>
    </div>
  )
}