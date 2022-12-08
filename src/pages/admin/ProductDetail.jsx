import { selectProductDetail } from '@/api/requests';
import Button from '@/components/Button';
import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import style from './ProductDetail.module.scss';

export default function ProductDetail() {
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

  return (
    <div>
      {title}
      <div></div>
      <div className={style.buttons}>
        <Button name={'수정'} isPurple={true} onClick={null} />
        <Button name={'삭제'} isPurple={true} onClick={null} />
      </div>
    </div>
  );
}
