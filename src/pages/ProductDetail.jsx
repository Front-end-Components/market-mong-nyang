import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import style from './ProductDetail.module.scss';
import { orders, products } from '../data/data.js';
import Button from '../components/Button';

export default function ProductDetail(props) {
  let [item] = useState(products);
  const {id} = useParams();

  // 랜더할 Item 찾기
  let detailItem = '';

  for(let i = 0; i < item.length; i++){
    if(item[i].id === id){
      detailItem = item[i];
      break;
    }
  };

  // 가격 콤마
  const price = detailItem.price;
  const priceComma = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

  return (
    <div className={style.detail}>
      <div className={style.container}>
        {/* 왼쪽 영역 (썸네일, 상세페이지) */}
        <div className={style.imgarea}>
        <img src={detailItem.thumbnail} width="100%" alt={detailItem.title}/>
        {/* 상세페이지 하드코딩 */}
        <img src='https://fly.gitt.co/baconbox/wp-content/uploads/2022/10/BACON_EASYWEAR-HEATING-QUILTED-COAT_ORANGE_contents_1.jpg' width="100%" alt={detailItem.title}/>
        <img src='https://fly.gitt.co/baconbox/wp-content/uploads/2022/10/BACON_EASYWEAR-HEATING-QUILTED-COAT_ORANGE_contents_2.jpg' width="100%" alt={detailItem.title}/>
        <img src='https://fly.gitt.co/baconbox/wp-content/uploads/2022/10/BACON_EASYWEAR-HEATING-QUILTED-COAT_ORANGE_contents_3.jpg' width="100%" alt={detailItem.title}/>
        <img src='https://fly.gitt.co/baconbox/wp-content/uploads/2022/10/BACON_EASYWEAR-HEATING-QUILTED-COAT_ORANGE_contents_4.jpg' width="100%" alt={detailItem.title}/>
        <img src='https://fly.gitt.co/baconbox/wp-content/uploads/2022/10/BACON_EASYWEAR-HEATING-QUILTED-COAT_ORANGE_contents_6.jpg' width="100%" alt={detailItem.title}/>
        <img src='https://fly.gitt.co/baconbox/wp-content/uploads/2022/10/BACON_EASYWEAR-HEATING-QUILTED-COAT_ORANGE_contents_7.jpg' width="100%" alt={detailItem.title}/>
        <img src='https://fly.gitt.co/baconbox/wp-content/uploads/2022/10/BACON_EASYWEAR-HEATING-QUILTED-COAT_ORANGE_contents_8.jpg' width="100%" alt={detailItem.title}/>
        </div>
        {/* 오른쪽 영역 (상품정보, 수량, 총 가격, 장바구니 버튼, 구매 버튼) */}
        <div className={style.menu}>
          <div className={style.fixed}>
            <div className={style.info}>
              <h4 className={style.title}>{detailItem.title}</h4>
              <p className={style.price}>{priceComma}원</p>
              <p className={style.desc}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div className={style.total}>
              <div className={style.countwrap}>
                <p>구매 수량</p>
                <div className={style.count}>
                  <button>-</button>
                  <p>1</p>
                  <button>+</button>
                </div>
              </div>
              <div className={style.totalprice}>
                <p>총 상품 금액</p>
                <p>₩ 원</p>
              </div>
            </div>
            <div className={style.button}>
              <Button name={'장바구니'} />
              <Button name={'구매하기'} isPurple={true} />
            </div>
          </div>
        </div>
      </div>
  </div>
  );
}
