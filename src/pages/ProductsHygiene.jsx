import React from 'react';
import style from './ProductsHygiene.module.scss';
import Product from '../components/Product.jsx'
import ProductHeader from '../components/ProductHeader';
import { useDispatch } from "react-redux";
import { useEffect, useState } from 'react';
import { getListProductAdmin } from '@/api/requests';
import { hideLoading, showLoading } from '@/store/loadingSlice';

export default function ProductsHygiene() {
  const [products, setProducts] = useState([]);
  let dispatch = useDispatch();
  
  // '주식'필터 적용
  const filterItems = products.filter(item => item.tags === '외출' || item.tags === '위생')
  console.log(filterItems);

  useEffect(() => {
    async function getData() {
      try {
        dispatch(showLoading());
        const data = await getListProductAdmin();
        setProducts(data);
        dispatch(hideLoading());
      } catch {
        alert('상품 목록을 조회하지 못했습니다.');
      } finally {
        dispatch(hideLoading());
      }
    }
    getData();
  }, []);

  return (
    <div className={style.products}>
      <div className={style.container}>
        <ProductHeader name={'외출 / 위생'} />
        <div className={style.row}>
          {filterItems.map((products) => {
              return <Product key={products.id} products={products} />
            })}
        </div>
      </div>
    </div>
  );
}