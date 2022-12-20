import React from 'react';
import style from './Products.module.scss';
import Product from '../components/Product.jsx'
import ProductHeader from '../components/ProductHeader';
import Pagination from '@/components/Pagination';
import { useDispatch } from "react-redux";
import { useEffect, useState } from 'react';
import { getListProductAdmin } from '@/api/requests';
import { hideLoading, showLoading } from '@/store/loadingSlice';

export default function Products({tag1, tag2, category}) {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 12;
  const offset = (page - 1) * limit;
  let dispatch = useDispatch();
  
  // 필터 적용
  const filterItems = products.filter(item => item.tags === tag1 || item.tags === tag2)
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
        <ProductHeader name={category} isMedium={false} />
        <div className={style.row}>
          {filterItems.slice(offset, offset + limit).map((products) => {
              return <Product key={products.id} products={products} />
            })}
        </div>
        {Array.isArray(filterItems) ? (
          <Pagination total={filterItems.length} limit={limit} page={page} setPage={setPage} />
        ) : null}
      </div>
    </div>
  );
}