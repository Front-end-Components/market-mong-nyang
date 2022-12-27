import React, { useState } from 'react';
import Button from '@/components/common/Button';
import { useNavigate } from 'react-router-dom';
import style from '@/pages/Mypage/MyOrder/MyOrder.module.scss';
import { formatPrice } from '@/utils/formats';
import { updateOrderOk, updateOrderCancel } from '@/api/requests';
import { Modal } from '@/components/common/Modal';

export default function Order({ item }) {
  const [modal, setModal] = useState(false);
  const [modalText, setModalText] = useState('');
  const navigate = useNavigate();

  let orderGuideMain = '구매가 완료 되었습니다.';
  let orderGuideSub = '구매 확정 이후에는 주문 취소가 불가능합니다.';
  if (item.isCanceled) {
    orderGuideMain = '주문이 취소 되었습니다.';
    orderGuideSub = '';
  } else if (item.done) {
    orderGuideMain = '구매가 확정 되었습니다.';
  }

  let stateText = '구매 완료';
  if (item.done) {
    stateText = '구매 확정';
  } else if (item.isCanceled) {
    stateText = '주문 취소';
  }

  let date = item.timePaid.substr(0, 10);
  let price = formatPrice(item.product.price);
  let thumbnail = `${item.product.thumbnail}`;

  return (
    <div className={style.content}>
      {modal ? <Modal modal={modal} setModal={setModal} modalText={modalText} /> : null}
      <div className={style.orderContent}>
        <div className={style.imgContent}>
          <img src={thumbnail} className={style.orderImg}></img>
        </div>
        <div className={style.textContent}>
          <p
            className={style.productName}
            onClick={() => {
              navigate(`/mypage/order/${item.detailId}`, {
                state: {
                  id: item.detailId,
                  count: item.cnt,
                },
              });
            }}
          >
            {item.product.title}
          </p>
          <p className={style.orderPrice}>{price}원</p>
          <p className={style.orderDate}>{date}</p>
          <p className={style.orderState}>{stateText}</p>
          <p className={style.orderGuide}>{orderGuideMain}</p>
          <p className={style.orderGuide}>{orderGuideSub}</p>
        </div>
        <div className={style.btnContent}>
          <Button
            display={item.done || item.isCanceled}
            name={'주문 취소'}
            onClick={() => {
              if (window.confirm('주문을 취소 하시겠습니까?')) {
                try {
                  while (item.cnt > 0) {
                    const detailID = {
                      detailId: item[item.cnt],
                    };
                    updateOrderCancel(detailID);
                    item.cnt--;
                  }
                } finally {
                  window.location.replace('/mypage/order');
                  setModal(true);
                  setModalText('주문이 취소 되었습니다.');
                }
              }
            }}
          />
          <Button
            display={item.done || item.isCanceled}
            name={'구매 확정'}
            isPurple={true}
            onClick={() => {
              if (window.confirm('구매를 확정 하시겠습니까?')) {
                try {
                  for (let i = 1; i <= item.cnt; i++) {
                    const detailID = {
                      detailId: item[i],
                    };
                    updateOrderOk(detailID);
                  }
                } finally {
                  window.location.replace('/mypage/order');
                  setModal(true);
                  setModalText('구매가 확정 되었습니다.');
                }
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}
