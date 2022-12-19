import { getProductDetail } from '@/api/requests';
import React from 'react';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import style from './ProductDetail.module.scss';
import Button from '../components/Button';
import { formatPrice } from '@/utils/formats.js';
import { insertItem } from '@/store/cartSlice';
import { insertLike } from '@/store/likeSlice';
import { useDispatch } from "react-redux";
import { hideLoading, showLoading } from '@/store/loadingSlice';
import CartModal from '@/components/CartModal';
import Like from '@/components/Like';

export default function ProductDetail() {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(1);
  const [modal, setModal] = useState(false);
  const {id} = useParams();
  const price = products.price;
  let dispatch = useDispatch();
  const navigate = useNavigate();
  const [like, setLike] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        dispatch(showLoading());
        const data = await getProductDetail(id);
        setProducts(data);
      } catch {
        alert('상품이 존재하지 않습니다.');
      } finally {
        dispatch(hideLoading());
      }
    }
    getData();
  }, []);

  return (
    <div className={style.detail}>
      {
        modal === true ? <CartModal modal={modal} setModal={setModal} /> : null
      }
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
              <span
                className={style.like}
                onClick={()=> {
                  setLike(!like);
                  dispatch(insertLike({
                    id: products.id,
                    isSoldOut: false,
                    price: products.price,
                    thumbnail: products.thumbnail,
                    title: products.title,
                    count: count,
                    checked: true,
                  }));
                }}
              >
                <Like like={like} setLike={setLike} />
              </span>
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
            <Button
            name={'장바구니'}
            className={style.sale}
            onClick={() => {
              dispatch(insertItem({
                id: products.id,
                isSoldOut: false,
                price: products.price,
                thumbnail: products.thumbnail,
                title: products.title,
                count: count,
                checked: true,
              }));
              // alert('장바구니에 추가되었습니다.');
              setModal(true);
            }} />
            <Button name={'구매하기'} isPurple={true} onClick={() => {
                navigate('/payment', {
                  state: {
                    title: products.title,
                    id: products.id,
                    count: count,
                    price: products.price,
                  }});
              }} />
          </div>
          }
          </div>
        </div>
      </div>
  </div>
  );
}
