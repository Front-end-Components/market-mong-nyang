import React from 'react'
import Button from '@/components/Button'
import style from './SelectDeleteModal.module.scss'
import { deleteItem } from '@/store/cartSlice';
import { AiTwotoneDelete } from 'react-icons/ai';
import { useDispatch } from "react-redux";

function SelectDeleteModal({ checkedList, modal, setModal }) {
  let dispatch = useDispatch();

  return (
    <div className={style.deletemodal}>
      <AiTwotoneDelete className={style.icon} size='30' title='cart' color='rgb(95, 0, 128)' />
      <h3>삭제하시겠습니까?</h3>
      <div className={style.btnwrap}>
        <Button name={'취소'} onClick={() => setModal(!modal)} />
        <Button
        name={'확인'}
        onClick={() => {
          checkedList.forEach((item) => {
            dispatch(deleteItem(item.id))
            setModal(!modal);
        })
        }}
        isPurple={true}
        />
      </div>
    </div>
  )
}

export default SelectDeleteModal