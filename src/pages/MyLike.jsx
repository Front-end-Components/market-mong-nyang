import React from 'react';
import MypageHeader from '../components/MypageHeader';
import style from './MyLike.module.scss';
import { VscHeart } from 'react-icons/vsc';

export default function MyLike() {
  return (
    <div className={style.myLike}>
      <MypageHeader name={'찜한 상품'} />
      <div className={style.content}>
        <VscHeart size='60' title='찜' color='lightgray' />
        <p>찜한 상품이 없습니다.</p>
      </div>
    </div>
  );
}
