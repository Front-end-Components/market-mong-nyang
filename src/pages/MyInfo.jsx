import React from 'react';
import style from './MyInfo.module.scss';
import MypageHeader from '../components/MypageHeader';
import { RiErrorWarningLine } from 'react-icons/ri';

export default function MyInfo() {
  return (
    <div className={style.myInfo}>
      <MypageHeader name={'개인 정보 수정'} />

      <div className={style.noList}>
      <RiErrorWarningLine color='lightgray' size='50' title='닫기' />
      <h4>준비중입니다.</h4>
    </div>
    </div>
  )
}
