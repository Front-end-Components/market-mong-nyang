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
  const [file, setFile] = useState();
  const [isUploading, setIsUploading] = useState(false);
  const [success, setSuccess] = useState();

  const navigate = useNavigate();

  const handleChange = (e) => {
    let { name, value, files } = e.target;
    if (name === 'thumbnail') {
      // setFile(files && files[0]);
      // console.log(files[0]);
      return;
    } else if (name === 'photo') {
      return;
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
    // setIsUploading(true);
    // uploadImage(file) //
    //   .then((url) => {
    //     addProduct.mutate(
    //       { product, url },
    //       {
    //         onSuccess: () => {
    //           setSuccess('성공적으로 제품이 추가되었습니다.');
    //           setTimeout(() => {
    //             setSuccess(null);
    //           }, 4000);
    //         },
    //       }
    //     );
    //   })
    //   .finally(() => setIsUploading(false));
  };

  return (
    <div className={style.formWrap}>
      <div className={style.header}>
        <h1>상품 등록</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={style.inputWrap}>
          <span>제품명</span>
          <input type='text' name='title' value={product.title ?? ''} placeholder='제품명' required onChange={handleChange} />
        </div>
        <div className={style.inputWrap}>
          <span>가격</span>
          <input type='number' name='price' value={product.price ?? ''} placeholder='가격' required onChange={handleChange} />
        </div>
        <div className={style.inputWrap}>
          <div className={style.textWrap}>
            <span>제품 상세 설명</span>
          </div>
          <textarea type='text' name='description' value={product.description ?? ''} placeholder='제품 상세 설명' required onChange={handleChange} />
        </div>
        <div className={style.inputWrap}>
          <span>태그</span>
          <input type='text' name='tags' value={product.tags ?? ''} placeholder='태그(콤마(,)로 구분)' onChange={handleChange} />
        </div>
        <div className={style.inputWrap}>
          <span>썸네일 이미지</span>
          <input type='file' accept='image/*' name='thumbnail' onChange={handleChange} />
        </div>
        <div className={style.inputWrap}>
          <span>상품 상세 이미지</span>
          <input type='file' accept='image/*' name='photo' onChange={handleChange} />
        </div>
        <div className={style.buttons}>
          <Button name={'등록'} isPurple={true} />
          <Button name={'취소'} onClick={() => navigate(-1)} />
        </div>
      </form>
    </div>
  );
}
