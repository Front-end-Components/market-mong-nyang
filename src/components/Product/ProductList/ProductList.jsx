import React from 'react';
import style from './ProductList.module.scss';
import Product from '@/components/Product/Product/Product'
import ProductHeader from '@/components/Product/ProductHeader/ProductHeader';
import Pagination from '@/components/common/Pagination';
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
  
  useEffect(() => {
    async function getData() {
      try {
        dispatch(showLoading());
        const data = await getListProductAdmin();
        setProducts(data.filter(item => item.tags === tag1 || item.tags === tag2));
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
          {products.slice(offset, offset + limit).map((products) => {
              return <Product key={products.id} products={products} />
            })}
        </div>
        {Array.isArray(products) ? (
          <Pagination total={products.length} limit={limit} page={page} setPage={setPage} />
        ) : null}
      </div>
    </div>
  );
}