import React from 'react'
import Button from './Button'
import style from './CartModal.module.scss'
import { Link } from 'react-router-dom';
import { BsFillCartCheckFill } from 'react-icons/bs';

function Modal({ modal, setModal }) {
  return (
    <div className={style.cartmodal}>
      <BsFillCartCheckFill className={style.icon} size='30' title='cart' color='rgb(95, 0, 128)' />
      <h3>장바구니에 추가되었습니다.</h3>
      <div className={style.btnwrap}>
        <Button
        name={'계속 쇼핑하기'}
        onClick={() => setModal(!modal)}
        isPurple={true}
        />
        <Link to='/cart'>
          <Button name={'장바구니 보기'} />
        </Link>
      </div>
    </div>
  )
}

export default Modal