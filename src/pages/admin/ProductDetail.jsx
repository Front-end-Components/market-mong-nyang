import { deleteProduct, selectProductDetail } from '@/api/requests';
import Button from '@/components/Button';
import { formatPrice } from '@/utils/formats';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import style from './ProductDetail.module.scss';

export default function ProductDetail() {
  const navigate = useNavigate();
  // const [product, setProduct] = useState({});
  // const { id } = useParams();

  // useEffect(() => {
  //   async function getData() {
  //     const data = await selectProductDetail(id);
  //     setProduct(data);
  //   }
  //   getData();
  // }, []);

  const {
    state: {
      item: { id, title, price, description, tags, thumbnail, photo, isSoldOut },
    },
  } = useLocation();

  const onClickUpdateBtn = () => {};

  const onClickdDeleteBtn = () => {
    if (window.confirm('해당 상품을 삭제하시겠습니까?')) {
      deleteProduct(id).then((res) => {
        if (res) {
          alert('삭제가 완료되었습니다.');
          navigate('/admin/products');
        } else {
          alert('삭제가 완료되지 못했습니다.');
        }
      });
    }
  };

  return (
    <div>
      <img src='' alt='thumbnail' />
      <p>상품명 : {title}</p>
      <p>가격 : {formatPrice(price)}</p>
      <p>상품 설명 : {description}</p>
      <p>태그 : {tags}</p>
      <p>품절 여부 : {isSoldOut ? 'Y' : 'N'}</p>
      <img src='' alt='photo' />
      <div className={style.buttons}>
        <Button name={'수정'} isPurple={true} onClick={onClickUpdateBtn} />
        <Button name={'삭제'} isPurple={true} onClick={onClickdDeleteBtn} />
      </div>
    </div>
  );
}
