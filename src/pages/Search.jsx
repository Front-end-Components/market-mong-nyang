import React from 'react';
import { useEffect, useState } from 'react';
import style from './Search.module.scss';
import { useParams } from 'react-router-dom';
import Product from '../components/Product';
import ProductHeader from '@/components/ProductHeader';
import { hideLoading, showLoading } from '@/store/loadingSlice';
import { useDispatch } from 'react-redux';
import { searchProduct } from '@/api/requests';

export default function Search() {
  const dispatch = useDispatch();
  const { value } = useParams();

  // 검색 결과
  const [products, setProducts] = useState([]);
  console.log(value)

  useEffect(() => {
    const getProducts = async () => {
      try {
        dispatch(showLoading());
        console.log('value :::', value);
        const data = await searchProduct({ "searchText": value, });
        setProducts(data);
        dispatch(hideLoading());
      } catch {
        alert('상품 목록을 조회하지 못했습니다.');
      } finally {
        dispatch(hideLoading());
      }
    }
    getProducts();
  }, [value]) 

  return (
    <div className={style.search}>
      <div className={style.container}>
        <ProductHeader name={value + '에 대한 검색 결과입니다.'} />
        <div className={style.row}>
          { products.map((products) => {
              return <Product key={products.id} products={products} />
            })}
        </div>
      </div>
    </div>
  );
}