import { selectListProductAdmin } from '@/api/requests';
import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import style from './ProductDetail.module.scss';
import Button from '../components/Button';

export default function ProductDetail(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getData() {
      const data = await selectListProductAdmin();
      setProducts(data);
    }
    getData();
  }, []);

  const {id} = useParams();

  // 랜더할 Item 찾기
  let detailItem = '';
  for(let i = 0; i < products.length; i++){
    if(products[i].id === id){
      detailItem = products[i];
      break;
    }
  };

  const [count, setCount] = useState(1);

  // 가격 콤마 변환
  const price = detailItem.price;
  function setComma(originPrice) {
    if(originPrice){
      let result = originPrice.toLocaleString('ko-KR');
      return result;
    }
  }
  
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
              <p className={style.price}>{setComma(price)}원</p>
              <p className={style.desc}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
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
                <p>₩ {setComma(price * count)}원</p>
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
