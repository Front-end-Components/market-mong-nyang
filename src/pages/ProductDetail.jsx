import { getProductDetail } from '@/api/requests';
import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import style from './ProductDetail.module.scss';
import Button from '../components/Button';
import { formatPrice } from '@/utils/formats.js';
import { insertItem } from '@/store/cartSlice';
import { useDispatch } from "react-redux";
import { hideLoading, showLoading } from '@/store/loadingSlice';

export default function ProductDetail() {
  const [products, setProducts] = useState([]);
  const {id} = useParams();
  const [count, setCount] = useState(1);
  const price = products.price;
  let dispatch = useDispatch();

  useEffect(() => {
    async function getData() {
      const data = await getProductDetail(id);
      setProducts(data);
      dispatch(hideLoading());
    }
    getData();
  }, []);

  return (
    <div className={style.detail}>
      <div className={style.container}>
        {/* 이미지 영역 */}
        <div className={style.imgarea}>
          {/* 썸네일 */}
          <img src={products.thumbnail} width="100%" alt={products.title}/>
          {/* 상세페이지 */}
          <img src={products.photo} width="100%" alt={products.title}/>
        </div>
        {/* 상품 정보 영역(수량, 총 가격, 장바구니 버튼, 구매 버튼) */}
        <div className={style.menu}>
          <div className={style.fixed}>
            <div className={style.info}>
              <h4 className={style.title}>{products.title}</h4>
              <p className={style.price}>{formatPrice(price)}원</p>
              {/* <p className={style.tags}>{products.tags}</p> */}
            </div>
            <div className={style.total}>
              <div className={style.countwrap}>
                <p>구매 수량</p>
                {/* 카운트 버튼 */}
                <div className={style.count}>
                  <button onClick={() => {
                    if(count === 1){
                      return 1;
                    }
                    setCount(count - 1);
                  }}>-</button>
                  <p>{count}</p>
                  <button onClick={() => {
                    setCount(count + 1);
                  }}>+</button>
                </div>
              </div>
              <div className={style.totalprice}>
                <p>총 상품 금액</p>
                <p>₩ {formatPrice(price * count)}원</p>
              </div>
            </div>
            {products.isSoldOut ? 
            <div className={style.button}>
              <Button name={'품절'} className={style.soldout} disabled={true} />
            </div>
            : 
            <div className={style.button}>
            <Button name={'장바구니'} className={style.sale} onClick={() => {
              dispatch(insertItem({
                id: products.id,
                isSoldOut: false,
                price: products.price,
                thumbnail: products.thumbnail,
                title: products.title,
                count: count,
                checked: true,
              }));
            }} />
            <Button name={'구매하기'} className={style.sale} isPurple={true} />
          </div>
          }
          </div>
        </div>
      </div>
  </div>
  );
}
