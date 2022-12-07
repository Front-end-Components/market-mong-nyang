import React from 'react';
import { useState } from 'react';
import style from './Products.module.scss';
import { orders, products } from '../data/data.js';
import Item from '../components/Item.jsx'

export default function AllProducts() {

  let [item] = useState(products);
  console.log(item[0].title);

  return (
    <div className={style.products}>
      AllProducts
      <div className={style.container}>
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