import React, { useState, useEffect} from 'react';
import Button from '@/components/common/Button';
import { useNavigate } from 'react-router-dom';
import style from '@/pages/Mypage/MyOrder/MyOrder.module.scss';
import { formatPrice } from '@/utils/formats';
import { updateOrderOk, updateOrderCancel } from '@/api/requests';
import { Modal, ModalOkCancel } from '@/components/common/Modal';

export default function Order({ item }) {
  const [modal, setModal] = useState(false);
  const [modalText, setModalText] = useState('');
  const [displayBtn, setDisplayBtn] = useState(false);
  const [stateText, setStateText] = useState('구매 완료');
  const [guideMain, setGuideMain] = useState('구매가 완료 되었습니다.');
  const [guideSub, setGuideSub] = useState('구매 확정 이후에는 주문 취소가 불가능합니다.');
  const navigate = useNavigate();

  useEffect(() => {
    if (item.isCanceled) {
      setGuideMain('주문이 취소 되었습니다.');
      setGuideSub('');
      setStateText('주문 취소');
    } else if (item.done) {
      setGuideMain('구매가 확정 되었습니다.');
      setStateText('구매 확정');
    }
  }, []);

  async function OrderOk () {
    try {
      while(item.cnt > 0) {
        const detailID = {
          detailId: item[item.cnt],
        };
        await updateOrderOk(detailID);
        item.cnt--;
      }
    } catch {
      setModal(true);
      setModalText('오류가 발생하였습니다.');
    } finally {
      setModal(true);
      setModalText('구매가 확정 되었습니다.');
      setDisplayBtn(true);
      setGuideMain('구매가 확정 되었습니다.');
      setStateText('구매 확정');
    }
  }

  async function OrderCancel () {
    try {
      while(item.cnt > 0) {
        const detailID = {
          detailId: item[item.cnt],
        };
        await updateOrderCancel(detailID);
        item.cnt--;
      }
    } catch {
      setModal(true);
      setModalText('오류가 발생하였습니다.');
    } finally {
      setModal(true);
      setModalText('주문이 취소 되었습니다.');
      setDisplayBtn(true);
      setGuideMain('주문이 취소 되었습니다.');
      setGuideSub('');
      setStateText('주문 취소');
    }
  }

  let date = item.timePaid.substr(0, 10);
  let price = formatPrice(item.product.price);
  let thumbnail = `${item.product.thumbnail}`;


  return (
    <div className={style.content}>
      {modal ? <Modal modalText={modalText} /> : null}
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
          <p className={style.orderGuide}>{guideMain}</p>
          <p className={style.orderGuide}>{guideSub}</p>
        </div>
        <div className={style.btnContent}>
          <Button
            display={displayBtn || item.isCanceled || item.done}
            name={'주문 취소'}
            onClick={() => {
              ModalOkCancel('주문을 취소 하시겠습니까?', '취소', OrderCancel);
            }}
          />
          <Button
            display={displayBtn || item.isCanceled || item.done}
            name={'구매 확정'}
            isPurple={true}
            onClick={() => {
                ModalOkCancel('구매를 확정 하시겠습니까?', '확정', OrderOk);
            }}
          />
        </div>
      </div>
    </div>
  );
}
