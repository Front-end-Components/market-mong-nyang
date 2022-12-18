import React from 'react';
import style from './ProductsCare.module.scss';
import Product from '../components/Product.jsx'
import ProductHeader from '../components/ProductHeader';
import { useDispatch } from "react-redux";
import { useEffect, useState } from 'react';
import { getListProductAdmin } from '@/api/requests';
import { hideLoading, showLoading } from '@/store/loadingSlice';
import { TbMarquee2 } from 'react-icons/tb';

export default function ProductsCare() {
  const [products, setProducts] = useState([]);
  let dispatch = useDispatch();
  
  // '주식'필터 적용
  const filterItems = products.filter(item => item.tags === '건강' || item.tags === '케어')
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
        <ProductHeader name={'건강 / 케어'} />
        <div className={style.row}>
          {filterItems.map((products) => {
              return <Product key={products.id} products={products} />
            })}
        </div>
      </div>
    </div>
  );
}