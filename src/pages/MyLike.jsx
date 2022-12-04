import React from 'react';
import MypageHeader from '../components/MypageHeader';
import style from './MyLike.module.scss';

export default function MyLike() {
  return (
    <div className={style.myLike}>
      <MypageHeader name={'찜한 상품'} />
    </div>
  );
}
