import Button from '@/components/Button';
import React from 'react';
import style from './ProductEditForm.module.scss';

export default function ProductEditForm() {
  return (
    <div>
      <div className={style.buttons}>
        <Button name={'취소'} isPurple={true} />
        <Button name={'완료'} isPurple={true} />
      </div>
    </div>
  );
}
