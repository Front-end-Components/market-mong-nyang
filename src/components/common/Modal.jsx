import React from 'react';
import Button from '@/components/common/Button';
import style from './Modal.module.scss';
import { RiFileList2Line } from 'react-icons/ri';

function Modal({ modal, setModal, modalText, path }) {
  return (
    <div className={style.modal}>
      <RiFileList2Line className={style.icon} size="30" title="list" color="rgb(95, 0, 128)" />
      <h3 className={modalText}>{modalText}</h3>
      <div className={style.btnwrap}>
        <Button name={'close'} onClick={() => {
          path ? window.location.replace(path) : setModal(!modal);
        }} isPurple={true} />
      </div>
    </div>
  );
}

function ModalOkCancel({ modal, setModal, modalText }) {
  return (
    <div className={style.cartmodal}>
      <RiFileList2Line className={style.icon} size="30" title="list" color="rgb(95, 0, 128)" />
      <h3>{modalText}</h3>
      <div className={style.btnwrap}>
        <Button name={'close'} onClick={() => {
          return true;
        }} />
        <Button name={'close'} onClick={() => setModal(!modal)} isPurple={true} />
      </div>
    </div>
  );
}

export {Modal, ModalOkCancel};
