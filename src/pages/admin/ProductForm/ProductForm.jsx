import { insertProduct, updateProduct } from '@/api/requests';
import { hideLoading, showLoading } from '@/store/loadingSlice';
import { useDispatch } from 'react-redux';
import Button from '@/components/common/Button';
import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import style from './ProductForm.module.scss';
import { formatPrice } from '@/utils/formats';
import { isProductsUpdate } from '@/store/adminProductsSlice';

const MAX_THUMB_SIZE = 1024 ** 2;
const MAX_PHOTO_SIZE = 1024 ** 2 * 5;

export default function ProductEditForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const { state, pathname } = useLocation();
  const curPage = pathname.split('/')[3];
  const thumbInput = useRef();
  const photoInput = useRef();
  const [thumbName, setThumbName] = useState('');
  const [photoName, setPhotoName] = useState('');
  const [thumb, setThumb] = useState('');
  const [photo, setPhoto] = useState('');

  useEffect(() => {
    if (curPage === 'modify') {
      setProduct(state.product);
      const thumbName = state.product.thumbnail.split('/');
      const photoName = state.product.photo.split('/');
      setThumbName(thumbName[thumbName.length - 1]);
      setPhotoName(photoName[photoName.length - 1]);
      setThumb(state.product.thumbnail);
      setPhoto(state.product.photo);
    }
  }, []);

  const handleChange = (event) => {
    let { name, value, files } = event.target;

    if (files) {
      const file = files[0];
      if (name === 'thumbnailBase64' && file.size > MAX_THUMB_SIZE) {
        alert('썸네일 이미지 크기는 최대 1MB 입니다.');
        return;
      } else if (name === 'photoBase64' && file.size > MAX_PHOTO_SIZE) {
        alert('상세 이미지 크기는 최대 5MB 입니다.');
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!thumb) {
      alert('썸네일 이미지를 등록해 주세요.');
      return;
    }
    if (!photo) {
      alert('상세 이미지를 등록해 주세요.');
      return;
    }
    if (curPage === 'modify') {
      if (window.confirm('상품을 수정하시겠습니까?')) {
        try {
          dispatch(showLoading());
          await updateProduct(product.id, product);
          dispatch(isProductsUpdate(true));
          alert('상품 수정이 완료되었습니다.');
          navigate(`/admin/products/${id}`);
        } catch (e) {
          alert('상품 수정이 완료되지 못했습니다.');
        } finally {
          dispatch(hideLoading());
        }
      }
    } else {
      if (window.confirm('상품을 등록하시겠습니까?')) {
        try {
          dispatch(showLoading());
          await insertProduct(product);
          dispatch(isProductsUpdate(true));
          alert('상품 등록이 완료되었습니다.');
          navigate('/admin/products');
        } catch {
          alert('상품 등록이 완료되지 못했습니다.');
        } finally {
          dispatch(hideLoading());
        }
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
        <h1>{curPage === 'modify' ? '상품 수정' : '상품 등록'}</h1>
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
          {curPage === 'modify' && (
            <div className={style.group}>
              <p>
                품절 여부 <span className={style.required}>*</span>
              </p>
              <select name="isSoldOut" onChange={handleChange} value={product.isSoldOut} required>
                <option value={true}>Y</option>
                <option value={false}>N</option>
              </select>
            </div>
          )}
        </div>
        <div className={style.inputWrap}>
          <div className={style.fileGroup}>
            <p>
              썸네일 이미지 <span className={style.required}>*</span>
            </p>
            <div className={style.imgContainer}>
              <div className={style.imgContent}>
                {thumb && <img alt="썸네일 이미지" src={thumb} />}
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
        <Button
          name={curPage === 'modify' ? '수정 완료' : '등록'}
          isPurple={true}
          onClick={handleSubmit}
        />
        <Button
          name={'취소'}
          onClick={() => (curPage === 'modify' ? navigate(`/admin/products/${id}`) : navigate(-1))}
        />
      </div>
    </form>
  );
}
