import { deleteProduct, getProductDetail } from '@/api/requests';
import Button from '@/components/Button';
import { formatPrice } from '@/utils/formats';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import style from './ProductDetail.module.scss';

export default function ProductDetail() {
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function getData() {
      const data = await getProductDetail(id);
      setProduct(data);
    }
    getData();
  }, []);

  const handleClickUpdate = () => {
    navigate(`/admin/products/modify/${product.id}`, { state: { product } });
  };

  const handleClickDelete = () => {
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
      <img src={product.thumbnail} alt='thumbnail' />
      <p>상품명 : {product.title}</p>
      <p>가격 : {formatPrice(product.price)}</p>
      <p>상품 설명 : {product.description}</p>
      <p>태그 : {product.tags}</p>
      <p>품절 여부 : {product.isSoldOut ? 'Y' : 'N'}</p>
      <img src={product.photo} alt='photo' />
      <div className={style.buttons}>
        <Button name={'수정'} isPurple={true} onClick={handleClickUpdate} />
        <Button name={'삭제'} isPurple={true} onClick={handleClickDelete} />
      </div>
    </div>
  );
}
