import { selectListProductAdmin } from '@/api/requests';
import React from 'react';
import { useEffect, useState } from 'react';
import style from './Products.module.scss';
import Product from '../components/Product.jsx'
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
          { products.map((products) => {
              return <Product key={products.id} products={products} />
            })}
        </div>
      </div>
    </div>
  );
}