import Button from '@/components/common/Button';
import React from 'react';
import { useNavigate } from 'react-router';
import style from './NotFound.module.scss';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className={style.notFound}>
      <p>페이지를 찾을 수 없습니다.</p>
      <Button isPurple={true} name={'뒤로가기'} onClick={() => navigate(-1)} />
    </div>
  );
}
