import { updateProduct } from '@/api/requests';
import Button from '@/components/Button';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import style from './ProductEditForm.module.scss';

export default function ProductEditForm() {
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [isUploading, setIsUploading] = useState(false);
  const [success, setSuccess] = useState();

  const { state } = useLocation();

  useEffect(() => {
    setProduct(state.product);
  }, []);

  const handleChange = (event) => {
    let { name, value, files } = event.target;
    if (files) {
      const file = files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.addEventListener('load', (e) => {
        value = e.target.result;
        setProduct((product) => ({ ...product, [name]: value }));
        return;
      });
    } else if (name === 'price') {
      value = Number(value);
    }
    setProduct((product) => ({ ...product, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product);
    if (window.confirm('상품을 등록하시겠습니까?')) {
      updateProduct(product.id, product).then((res) => {
        if (res) {
          alert('상품 등록이 완료되었습니다.');
          navigate('/admin/products');
        } else {
          alert('상품 등록이 완료되지 못했습니다.');
        }
      });
    }
  };

  return (
    <div className={style.formWrap}>
      <div className={style.header}>
        <h1>상품 수정</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={style.inputWrap}>
          <span>제품명 *</span>
          <input type='text' name='title' value={product.title ?? ''} placeholder='제품명' required onChange={handleChange} />
        </div>
        <div className={style.inputWrap}>
          <span>가격 *</span>
          <input type='number' name='price' value={product.price ?? ''} placeholder='가격' required onChange={handleChange} />
        </div>
        <div className={style.inputWrap}>
          <div className={style.textWrap}>
            <span>제품 상세 설명 *</span>
          </div>
          <textarea type='text' name='description' value={product.description ?? ''} placeholder='제품 상세 설명' required onChange={handleChange} />
        </div>
        <div className={style.inputWrap}>
          <span>태그</span>
          <input type='text' name='tags' value={product.tags ?? ''} placeholder='태그(콤마(,)로 구분)' onChange={handleChange} />
        </div>
        <div className={style.inputWrap}>
          <span>썸네일 이미지</span>
          <input type='file' accept='image/*' name='thumbnailBase64' onChange={handleChange} />
        </div>
        <div className={style.inputWrap}>
          <span>상품 상세 이미지</span>
          <input type='file' accept='image/*' name='photoBase64' onChange={handleChange} />
        </div>
        <div className={style.inputWrap}>
          <span>품절 여부</span>
          <input type='radio' checked={product.isSoldOut ?? 'checked'} name='isSoldOut' onChange={handleChange} />
        </div>
        <div className={style.buttons}>
          <Button name={'수정완료'} isPurple={true} onClick={handleSubmit} />
          <Button name={'취소'} onClick={() => navigate(-1)} />
        </div>
      </form>
    </div>
  );
}
