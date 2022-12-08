import React from 'react';
import { useState } from 'react';
import style from './Products.module.scss';
import { orders, products } from '../data/data.js';
import Item from '../components/Item.jsx'
import ProductHeader from '../components/ProductHeader';

export default function AllProducts() {

  let [item] = useState(products);
  console.log(item[0].title);

  return (
    <div className={style.products}>
      <div className={style.container}>
        <ProductHeader name={'전체 상품'} />
        <div className={style.row}>
          {
            item.map((a, i) => {
              return (
                  <Item item={item[i]} />
              )
            })
          }
        </div>
      </div>
    </div>
  );
}