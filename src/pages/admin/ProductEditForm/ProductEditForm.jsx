import { updateProduct } from '@/api/requests';
import { hideLoading, showLoading } from '@/store/loadingSlice';
import { useDispatch } from 'react-redux';
import Button from '@/components/common/Button';
import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import style from './ProductEditForm.module.scss';
import { formatPrice } from '@/utils/formats';
import { isProductsUpdate } from '@/store/productsSlice';

const MAX_FILE_SIZE = 1024 ** 2 * 5;

export default function ProductEditForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();
  const { state } = useLocation();
  const thumbInput = useRef();
  const photoInput = useRef();
  const [thumbName, setThumbName] = useState('');
  const [photoName, setPhotoName] = useState('');
  const [thumb, setThumb] = useState('');
  const [photo, setPhoto] = useState('');

  useEffect(() => {
    setProduct(state.product);
    const thumbName = state.product.thumbnail.split('/');
    const photoName = state.product.photo.split('/');
    setThumbName(thumbName[thumbName.length - 1]);
    setPhotoName(photoName[photoName.length - 1]);
    setThumb(state.product.thumbnail);
    setPhoto(state.product.photo);
  }, []);

  const handleChange = (event) => {
    let { name, value, files } = event.target;
    if (files) {
      const file = files[0];
      if (file.size > MAX_FILE_SIZE) {
        alert('파일 크기는 최대 5MB 입니다.');
        return;
      }
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.addEventListener('load', (e) => {
        value = e.target.result;
        setProduct((product) => ({ ...product, [name]: value }));
        if (name === 'thumbnailBase64') {
          setThumbName(files[0].name);
          setThumb(value);
        } else if (name === 'photoBase64') {
          setPhotoName(files[0].name);
          setPhoto(value);
        }
        return;
      });
    } else if (name === 'price') {
      value = formatPrice(Number(value.replace(/,/g, '')));
    } else if (name === 'isSoldOut') {
      value = JSON.parse(value);
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
        dispatch(isProductsUpdate(true));
        alert('상품 수정이 완료되었습니다.');
        navigate(`/admin/product/${id}`);
      } catch (e) {
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
              type="text"
              name="price"
              value={formatPrice(product.price) ?? ''}
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
            <div className={style.imgContainer}>
              <div className={style.imgContent}>
                <img alt="썸네일 이미지" src={thumb} />
              </div>
              <div className={style.btnContent}>
                {thumbName ? (
                  <Button
                    name={'파일 변경'}
                    isPurple={true}
                    onClick={handleThumbnail}
                    width={'100px'}
                  />
                ) : (
                  <Button name={'파일 선택'} onClick={handleThumbnail} width={'100px'} />
                )}
                <p className={style.fileName}>{thumbName}</p>
              </div>
            </div>
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
            <div className={style.imgContainer}>
              <div className={style.imgContent}>
                {photo && <img alt="상세 이미지" src={photo} />}
              </div>
              <div className={style.btnContent}>
                {photoName ? (
                  <Button
                    name={'파일 변경'}
                    isPurple={true}
                    onClick={handlePhoto}
                    width={'100px'}
                  />
                ) : (
                  <Button name={'파일 선택'} onClick={handlePhoto} width={'100px'} />
                )}
                <p className={style.fileName}>{photoName}</p>
              </div>
            </div>
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
        <Button name={'수정 완료'} isPurple={true} onClick={handleSubmit} />
        <Button name={'취소'} onClick={() => navigate(`/admin/product/${id}`)} />
      </div>
    </form>
  );
}
