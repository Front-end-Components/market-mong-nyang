import { updateProduct } from '@/api/requests';
import { hideLoading, showLoading } from '@/store/loadingSlice';
import { useDispatch } from 'react-redux';
import Button from '@/components/Button';
import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import style from './ProductEditForm.module.scss';

export default function ProductEditForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();
  const { state } = useLocation();
  const thumbInput = useRef();
  const photoInput = useRef();
  const [thumb, setThumb] = useState('');
  const [photo, setPhoto] = useState('');

  useEffect(() => {
    setProduct(state.product);
    const thumb = state.product.thumbnail.split('/');
    const photo = state.product.photo.split('/');
    setThumb(thumb[thumb.length - 1]);
    setPhoto(photo[photo.length - 1]);
  }, []);

  const handleChange = (event) => {
    let { name, value, files } = event.target;
    if (files) {
      const file = files[0];
      if (name === 'thumbnailBase64') {
        setThumb(files[0].name);
      } else if (name === 'photoBase64') {
        setPhoto(files[0].name);
      }
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.addEventListener('load', (e) => {
        value = e.target.result;
        setProduct((product) => ({ ...product, [name]: value }));
        return;
      });
    } else if (name === 'price') {
      value = Number(value);
    } else if (name === 'isSoldOut') {
      value = Boolean(value);
    }
    setProduct((product) => ({ ...product, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!thumb) {
      alert('썸네일 이미지를 등록해 주세요.');
      return;
    }
    if (!photo) {
      alert('상세 이미지를 등록해 주세요.');
      return;
    }
    if (window.confirm('상품을 수정하시겠습니까?')) {
      try {
        dispatch(showLoading());
        updateProduct(product.id, product);
        alert('상품 수정이 완료되었습니다.');
        navigate(`/admin/product/${id}`);
      } catch {
        alert('상품 수정이 완료되지 못했습니다.');
      } finally {
        dispatch(hideLoading());
      }
    }
  };

  const handleThumbnail = (e) => {
    e.preventDefault();
    thumbInput.current.click();
  };

  const handlePhoto = (e) => {
    e.preventDefault();
    photoInput.current.click();
  };

  return (
    <form className={style.formWrap} onSubmit={handleSubmit}>
      <div className={style.header}>
        <h1>상품 수정</h1>
      </div>
      <div className={style.content}>
        <div className={style.inputWrap}>
          <div className={style.group}>
            <p>
              제품명 <span className={style.required}>*</span>
            </p>
            <input
              type="text"
              name="title"
              value={product.title ?? ''}
              placeholder="제품명"
              required
              onChange={handleChange}
            />
          </div>
          <div className={style.group}>
            <p>
              가격 <span className={style.required}>*</span>
            </p>
            <input
              type="number"
              name="price"
              value={product.price ?? ''}
              placeholder="가격"
              required
              onChange={handleChange}
            />
          </div>
          <div className={style.group}>
            <div className={style.textWrap}>
              <p>
                제품 상세 설명 <span className={style.required}>*</span>
              </p>
            </div>
            <textarea
              type="text"
              name="description"
              value={product.description ?? ''}
              placeholder="제품 상세 설명"
              required
              onChange={handleChange}
            />
          </div>
          <div className={style.group}>
            <p>
              카테고리 <span className={style.required}>*</span>
            </p>
            <select name="tags" onChange={handleChange} value={product.tags} required>
              <option value="">선택</option>
              <option value="주식">주식</option>
              <option value="간식">간식</option>
              <option value="건강">건강</option>
              <option value="케어">케어</option>
              <option value="의류">의류</option>
              <option value="리빙">리빙</option>
              <option value="외출">외출</option>
              <option value="위생">위생</option>
            </select>
          </div>
          <div className={style.group}>
            <p>
              품절 여부 <span className={style.required}>*</span>
            </p>
            <select name="isSoldOut" onChange={handleChange} value={product.isSoldOut} required>
              <option value={true}>Y</option>
              <option value={false}>N</option>
            </select>
          </div>
        </div>
        <div className={style.inputWrap}>
          <div className={style.fileGroup}>
            <p>
              썸네일 이미지 <span className={style.required}>*</span>
            </p>
            {thumb ? (
              <Button
                name={'파일 변경'}
                isPurple={true}
                onClick={handleThumbnail}
                width={'100px'}
              />
            ) : (
              <Button name={'파일 선택'} onClick={handleThumbnail} width={'100px'} />
            )}
            <span className={style.fileName}>{thumb}</span>
            <input
              className={style.file}
              type="file"
              accept="image/*"
              name="thumbnailBase64"
              onChange={handleChange}
              ref={thumbInput}
            />
          </div>
          <div className={style.fileGroup}>
            <p>
              상품 상세 이미지 <span className={style.required}>*</span>
            </p>
            {photo ? (
              <Button name={'파일 변경'} isPurple={true} onClick={handlePhoto} width={'100px'} />
            ) : (
              <Button name={'파일 선택'} onClick={handlePhoto} width={'100px'} />
            )}
            <span className={style.fileName}>{photo}</span>
            <input
              className={style.file}
              type="file"
              accept="image/*"
              name="photoBase64"
              onChange={handleChange}
              ref={photoInput}
            />
          </div>
        </div>
      </div>
      <div className={style.buttons}>
        <Button name={'수정완료'} isPurple={true} />
        <Button name={'취소'} onClick={() => navigate(`/admin/product/${id}`)} />
      </div>
    </form>
  );
}
