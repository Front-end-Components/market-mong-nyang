import React from 'react';
import { useEffect, useState } from 'react';
import style from './Search.module.scss';
import { useParams } from 'react-router-dom';
import Product from '@/components/Product/Product/Product'
import ProductHeader from '@/components/Product/ProductHeader/ProductHeader';
import { hideLoading, showLoading } from '@/store/loadingSlice';
import { useDispatch } from 'react-redux';
import { searchProduct } from '@/api/requests';
import { TbMoodEmpty } from 'react-icons/tb';

export default function Search() {
  const dispatch = useDispatch();
  const { value } = useParams();

  // 검색 결과
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        dispatch(showLoading());
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
        { 
        products.length > 0 ?
        <>
        <ProductHeader name={value + '에 대한 검색 결과입니다.'} />
        <div className={style.row}>
          { products.map((products) => {
              return <Product key={products.id} products={products} />
            })}
        </div></>:
        <>
        <ProductHeader name={value + '에 대한 검색 결과가 없습니다.'} />
          <div className={style.noresult}>
          <TbMoodEmpty className={style.icon} size="40" title="장바구니" color="rgb(95, 0, 128)" />
          <p className={style.text}>판매 중인 상품이 없습니다.<br/>검색어를 변경해 보세요.</p>
          </div>
        </>
        }
      </div>
    </div>
  );
}