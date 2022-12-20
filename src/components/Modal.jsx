import React from 'react'
import Button from './Button'
import style from './CartModal.module.scss'
import { RiFileList2Line } from 'react-icons/ri';

function MyOrderModal({ modal, setModal }) {
  return (
    <div className={style.cartmodal}>
      <RiFileList2Line className={style.icon} size='30' title='list' color='rgb(95, 0, 128)' />
      <h3>주문내역이 존재하지 않습니다.</h3>
      <div className={style.btnwrap}>
        <Button
        name={'close'}
        onClick={() => setModal(!modal)}
        isPurple={true}
        />
      </div>
    </div>
  )
}


function AccountModal({ modal, setModal }) {
  return (
    <div className={style.cartmodal}>
      <RiFileList2Line className={style.icon} size='30' title='list' color='rgb(95, 0, 128)' />
      <h3>계좌가 존재하지 않습니다.</h3>
      <div className={style.btnwrap}>
        <Button
        name={'close'}
        onClick={() => setModal(!modal)}
        isPurple={true}
        />
      </div>
    </div>
  )
}

export {MyOrderModal, AccountModal}