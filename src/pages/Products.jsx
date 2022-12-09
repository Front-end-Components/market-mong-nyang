import { selectListProductAdmin } from '@/api/requests';
import React from 'react';
import { useEffect, useState } from 'react';
import style from './Products.module.scss';
import Item from '../components/Item.jsx'
import ProductHeader from '../components/ProductHeader';

export default function AllProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getData() {
      const data = await selectListProductAdmin();
      setProducts(data);
    }
    getData();
  }, []);

  return (
    <div className={style.products}>
      <div className={style.container}>
        <ProductHeader name={'전체 상품'} />
        <div className={style.row}>
          {
            products.map((a, i) => {
              return (
                  <Item products={products[i]} />
              )
            })
          }
        </div>
      </div>
    </div>
  );
}