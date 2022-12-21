import React from 'react';
import CartItem from '@/components/Cart/CartItem/CartItem';
import style from './CartList.module.scss';
import { useSelector } from 'react-redux';
import Button from '@/components/common/Button';
import { useNavigate } from 'react-router-dom';
import { BsCart2 } from 'react-icons/bs';
import { allCheckedTrue, allCheckedFalse } from '@/store/cartSlice';
import { useDispatch } from 'react-redux';
import SelectDeleteModal from '@/components/Cart/SelectDeleteModal/SelectDeleteModal';
import { useState } from 'react';

export default function CartList() {
  let list = useSelector((state) => state.cart);
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();
  let dispatch = useDispatch();

  // 체크 된 항목 찾기
  const checkedList = list.filter((item) => item.checked === true);

  // 전체 선택
  const handleAllCheck = (checked) => {
    if (checked) {
      list.forEach((item) => dispatch(allCheckedTrue(item.id)));
    } else {
      list.forEach((item) => dispatch(allCheckedFalse(item.id)));
    }
  };

  return (
    <div className={style.cartlist}>
      {modal === true ? (
        <SelectDeleteModal checkedList={checkedList} modal={modal} setModal={setModal} />
      ) : null}
      {/* 장바구니 리스트 */}
      {list.length > 0 ? (
        list.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })
      ) : (
        <div className={style.empty}>
          <BsCart2 size="30" title="장바구니" color="rgb(95, 0, 128)" />
          <p>장바구니가 비었습니다.</p>
          <Button
            name={'쇼핑하러 가기'}
            onClick={() => {
              navigate('/');
            }}
          />
        </div>
      )}
      {/* 전체 선택, 선택 삭제 */}
      {list.length > 0 ? (
        <div className={style.buttonwrap}>
          <div className={style.checkAll}>
            <input
              id="checkAll"
              type="checkbox"
              checked={checkedList.length === list.length}
              onChange={(e) => {
                handleAllCheck(e.target.checked);
              }}
            />
            <label htmlFor="checkAll">전체 선택</label>
          </div>
          <button
            className={style.checkDel}
            onClick={() => {
              setModal(true);
            }}
          >
            선택 삭제
          </button>
        </div>
      ) : null}
    </div>
  );
}
