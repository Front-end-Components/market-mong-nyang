import React, { useState } from 'react';
import { insertProduct } from '@/api/requests';
import Button from '@/components/Button';
import style from './ProductAddForm.module.scss';
import { useNavigate } from 'react-router';

// interface RequestBody {
//   title: string // 제품 이름 (필수!)
//   price: number // 제품 가격 (필수!)
//   description: string // 제품 상세 설명 (필수!)
//   tags?: string[] // 제품 태그
//   thumbnailBase64?: string // 제품 썸네일(대표) 사진(base64) - jpg, jpeg, webp, png, gif, svg
//   photoBase64?: string // 제품 상세 사진(base64) - jpg, jpeg, webp, png, gif, svg
// }
export default function ProductForm() {
  const [product, setProduct] = useState({});
  const [isUploading, setIsUploading] = useState(false);
  const [success, setSuccess] = useState();

  const navigate = useNavigate();

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
    if (window.confirm('상품을 등록하시겠습니까?')) {
      insertProduct(product).then((res) => {
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
        <h1>상품 등록</h1>
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
        <div className={style.buttons}>
          <Button name={'등록'} isPurple={true} />
          <Button name={'취소'} onClick={() => navigate(-1)} />
        </div>
      </form>
    </div>
  );
}
