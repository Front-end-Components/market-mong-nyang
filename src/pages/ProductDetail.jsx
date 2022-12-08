import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import style from './ProductDetail.module.scss';
import { orders, products } from '../data/data.js';

export default function ProductDetail(props) {
  let [item] = useState(products);
  const {id} = useParams();

  // 랜더할 Item 찾기
  let detailItem = '';

  for(let i = 0; i < item.length; i++){
    if(item[i].id === id){
      detailItem = item[i];
      break;
    }
  }

  return (
    <div className={style.detail}>
      <div className={style.container}>
        <img src={detailItem.thumbnail} width="100%" alt={detailItem.title}/>
        <div className={style.info}>
          <h4 className={style.title}>{detailItem.title}</h4>
          <p className={style.price}>{detailItem.price}</p>
        </div>
      </div>
  </div>
  );
}
