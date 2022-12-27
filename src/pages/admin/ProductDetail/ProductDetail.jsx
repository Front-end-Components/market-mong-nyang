import { deleteProduct, getProductDetail } from '@/api/requests';
import { hideLoading, showLoading } from '@/store/loadingSlice';
import { useDispatch } from 'react-redux';
import Button from '@/components/common/Button';
import { formatPrice } from '@/utils/formats';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import style from './ProductDetail.module.scss';
import { isProductsUpdate } from '@/store/adminProductsSlice';

export default function ProductDetail() {
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    async function getData() {
      try {
        dispatch(showLoading());
        const data = await getProductDetail(id);
        setProduct(data);
      } catch {
        alert('상품 상세를 조회하지 못했습니다.');
      } finally {
        dispatch(hideLoading());
      }
    }
    getData();
  }, []);

  const handleClickUpdate = () => {
    navigate(`/admin/products/modify/${id}`, { state: { product } });
  };

  const handleClickDelete = async () => {
    if (window.confirm('해당 상품을 삭제하시겠습니까?')) {
      try {
        dispatch(showLoading());
        await deleteProduct(id);
        dispatch(isProductsUpdate(true));
        alert('삭제가 완료되었습니다.');
        navigate('/admin/products');
      } catch {
        alert('삭제가 완료되지 못했습니다.');
      } finally {
        dispatch(hideLoading());
      }
    }
  };

  return (
    <div className={style.productDetail}>
      <h1>상품 상세</h1>
      <div className={style.container}>
        <img src={product.thumbnail} alt="thumbnail" />
        <div className={style.info}>
          <div className={style.desc}>
            <h2>카테고리</h2>
            <p>{product.tags}</p>
            <h2>상품명</h2>
            <p>{product.title}</p>
            <h2>가격</h2>
            <p>{`${formatPrice(product.price)} 원`}</p>
            <h2>품절 여부</h2>
            <p>{product.isSoldOut ? 'Y' : 'N'}</p>
            <h2>상품 설명</h2>
            <p>{product.description}</p>
          </div>
          <div className={style.buttons}>
            <Button name={'수정'} isPurple={true} onClick={handleClickUpdate} />
            <Button name={'삭제'} isPurple={true} onClick={handleClickDelete} />
          </div>
        </div>
      </div>
      <img className={style.photo} src={product.photo} alt="photo" />
    </div>
  );
}
