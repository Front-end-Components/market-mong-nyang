import Button from '@/components/Button';
import { formatDate } from '@/utils/dateFormat';
import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import style from './OrderDetail.module.scss';

export default function OrderDetail() {
  const navigate = useNavigate();

  const {
    state: {
      item: { detailId, user, account, product, timePaid, isCanceled, done },
    },
  } = useLocation();

  return (
    <div>
      <img src='' alt='thumbnail' />
      <p>구매자 이메일 : {user.email}</p>
      <p>구매자 닉네임 : {user.displayName}</p>
      <p>프로필 이미지 : {user.profileImg}</p>
      <p>은행명 : {account.bankName}</p>
      <p>은행코드 : {account.bankCode}</p>
      <p>계좌번호 : {account.accountNumber}</p>
      <p>상품 ID : {product.productId}</p>
      <p>상품명 : {product.title}</p>
      <p>상품가격 : {product.price}</p>
      <p>상품설명 : {product.description}</p>
      <p>상품태그 : {product.tags}</p>
      <p>상품 썸네일 : {product.thumbnail}</p>
      <p>거래 일시 : {formatDate(timePaid)}</p>
      <p>취소여부 : {isCanceled ? 'Y' : 'N'}</p>
      <p>완료 여부 : {done ? 'Y' : 'N'}</p>
      <img src='' alt='photo' />
      <div className={style.buttons}>
        {isCanceled ? <Button name={'거래 취소 해제'} /> : <Button name={'거래 취소'} isPurple={true} />}
        {done ? <Button name={'거래 완료 해제'} /> : <Button name={'거래 완료'} isPurple={true} />}
      </div>
    </div>
  );
}
