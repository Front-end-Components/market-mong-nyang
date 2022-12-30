import { updateOrderAdmin } from '@/api/requests';
import { hideLoading, showLoading } from '@/store/loadingSlice';
import { useDispatch } from 'react-redux';
import Button from '@/components/common/Button';
import { formatDate, formatPrice } from '@/utils/formats';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import style from './OrderDetail.module.scss';
import { isOrderUpdate } from '@/store/adminOrdersSlice';

export default function OrderDetail() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [canceld, setCanceled] = useState(false);
  const [finished, setFinished] = useState(false);

  let {
    state: {
      item: { detailId, user, account, product, timePaid, isCanceled, done },
    },
  } = useLocation();

  useEffect(() => {
    setCanceled(isCanceled);
    setFinished(done);
  }, []);

  const handelChange = async (event) => {
    const id = event.currentTarget.id;
    let msg = '';
    if (id === 'cancel') {
      msg = canceld ? `거래 취소를 해제 처리하시겠습니까?` : `거래를 취소 처리하시겠습니까?`;
    } else {
      msg = finished ? `거래 완료를 해제 처리하시겠습니까?` : `거래를 완료 처리하시겠습니까?`;
    }

    if (window.confirm(msg)) {
      try {
        dispatch(showLoading());
        if (id === 'cancel') {
          await updateOrderAdmin(detailId, { isCanceled: !canceld });
          setCanceled(!canceld);
        } else {
          await updateOrderAdmin(detailId, { done: !finished });
          setFinished(!finished);
        }
        dispatch(isOrderUpdate(true));
        alert('처리가 완료되었습니다.');
      } catch {
        alert('처리가 완료되지 못했습니다.');
      } finally {
        dispatch(hideLoading());
      }
    }
  };

  return (
    <div className={style.orderDetail}>
      <div className={style.info}>
        <h1>거래 내역 상세</h1>
        <div
          className={style.product}
          onClick={() => navigate(`/admin/products/${product.productId}`)}
        >
          <img src={product.thumbnail} alt="thumbnail" />
          <div className={style.productInfo}>
            <h2>상품 정보</h2>
            <p>카테고리 : {product.tags}</p>
            <p>상품명 : {product.title}</p>
            <p>가격 : {`${formatPrice(product.price)} 원`}</p>
          </div>
        </div>
        <div className={style.group}>
          <h2>구매자 정보</h2>
          <p>구매자 이메일 : {user.email}</p>
          <p>구매자 닉네임 : {user.displayName}</p>
        </div>
        <div className={style.group}>
          <h2>계좌 정보</h2>
          <p>은행명 : {account.bankName}</p>
          <p>은행코드 : {account.bankCode}</p>
          <p>계좌번호 : {account.accountNumber}</p>
        </div>
        <div className={style.group}>
          <h2>거래 정보</h2>
          <p>거래 일시 : {formatDate(timePaid)}</p>
          <p>취소여부 : {canceld ? 'Y' : 'N'}</p>
          <p>완료여부 : {finished ? 'Y' : 'N'}</p>
        </div>
      </div>
      <div className={style.buttons}>
        <Button
          name={canceld ? '거래 취소 해제' : '거래 취소'}
          id={'cancel'}
          isPurple={!canceld && true}
          onClick={handelChange}
        />
        <Button
          name={finished ? '거래 완료 해제' : '거래 완료'}
          id={'done'}
          isPurple={!finished && true}
          onClick={handelChange}
        />
      </div>
    </div>
  );
}
