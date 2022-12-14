import { updateOrderAdmin } from '@/api/requests';
import Button from '@/components/Button';
import { formatDate, formatPrice } from '@/utils/formats';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import style from './OrderDetail.module.scss';

export default function OrderDetail() {
  const navigate = useNavigate();
  const [cancled, setCancled] = useState(false);
  const [finished, setFinished] = useState(false);

  let {
    state: {
      item: { detailId, user, account, product, timePaid, isCanceled, done },
    },
  } = useLocation();

  useEffect(() => {
    setCancled(isCanceled);
    setFinished(done);
  }, []);

  const handleChangeCancle = () => {
    const msg = cancled ? '거래 취소를 해제 처리하시겠습니까?' : '거래를 취소 처리하시겠습니까?';
    if (window.confirm(msg)) {
      updateOrderAdmin(detailId, { isCanceled: !cancled }).then((res) => {
        if (res) {
          setCancled(!cancled);
          alert('처리가 완료되었습니다.');
        } else {
          alert('처리가 완료되지 못했습니다.');
        }
      });
    }
  };

  const handelChangeDone = () => {
    const msg = finished ? '거래 완료를 해제 처리하시겠습니까?' : '거래를 완료 처리하시겠습니까?';
    if (window.confirm(msg)) {
      updateOrderAdmin(detailId, { done: !finished }).then((res) => {
        if (res) {
          setFinished(!finished);
          alert('처리가 완료되었습니다.');
        } else {
          alert('처리가 완료되지 못했습니다.');
        }
      });
    }
  };

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
      <p>상품가격 : {formatPrice(product.price)}</p>
      <p>상품설명 : {product.description}</p>
      <p>상품 카테고리 : {product.tags}</p>
      <p>상품 썸네일 : {product.thumbnail}</p>
      <p>거래 일시 : {formatDate(timePaid)}</p>
      <p>취소여부 : {cancled ? 'Y' : 'N'}</p>
      <p>완료 여부 : {finished ? 'Y' : 'N'}</p>
      <img src='' alt='photo' />
      <div className={style.buttons}>
        {cancled ? <Button name={'거래 취소 해제'} onClick={handleChangeCancle} /> : <Button name={'거래 취소'} isPurple={true} onClick={handleChangeCancle} />}
        {finished ? <Button name={'거래 완료 해제'} onClick={handelChangeDone} /> : <Button name={'거래 완료'} isPurple={true} onClick={handelChangeDone} />}
      </div>
    </div>
  );
}
