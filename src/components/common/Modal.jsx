import React from 'react';
import Button from '@/components/common/Button';
import style from './Modal.module.scss';
import { RiFileList2Line } from 'react-icons/ri';

import { confirmAlert } from "react-confirm-alert";

function Modal({ modalText, path }) {
  confirmAlert({
    customUI: ({ onClose }) => {
      return (
        <div className={style.modal}>
          <RiFileList2Line className={style.icon} size="30" title="list" color="rgb(95, 0, 128)" />
          <h3 className={style.modalText}>{modalText}</h3>
          <div className={style.btnwrap}>
            <Button name={'close'} onClick={() => {
              path ? window.location.replace(path) : onClose();
            }} isPurple={true} />
          </div>
        </div>
      );
    }
  });
}

function ModalOkCancel(message, btnName, orderFunction) {
  confirmAlert({
    customUI: ({ onClose }) => {
      return (
        <div className={style.modal}>
          <RiFileList2Line className={style.icon} size="30" title="list" color="rgb(95, 0, 128)" />
          <p className={style.modalText}>{message}</p>
          <div className={style.btnwrap}>
          <Button name={btnName} onClick={() => {
            orderFunction();
            onClose();
          }} />
          <Button name={'취소'} onClick={onClose} isPurple={true} />
          </div>
        </div>
      );
    }
  });
}

export {Modal, ModalOkCancel};
