import { useState, useEffect } from 'react';
import { hideLoading, showLoading } from '@/store/loadingSlice';
import { useDispatch } from 'react-redux';
import { deleteAccount } from '@/api/requests';
import style from './Account.module.scss';
import { formatPrice } from '@/utils/formats';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

export default function Account({ item, idx, pageClass, setAccounts }) {
  const dispatch = useDispatch();
  const [componentClass, setComponentClass] = useState(null);
  const [deleteBank, setDeleteBank] = useState('');

  // 계좌 삭제
  async function deleteData(body) {
    try {
      dispatch(showLoading());  // 로딩
      const data = await deleteAccount(body);
      setAccounts(data);
      alert("계좌가 삭제됐습니다.");
    } catch {
      alert("계좌 삭제가 실패했습니다.");
    } finally {
      dispatch(hideLoading());  // 로딩
    }
  }

  useEffect(() => {
    const moduleClass = cx('account');
    const classResult = !pageClass ? `${moduleClass}` : `${moduleClass} ${pageClass}`;

    setComponentClass(classResult);
  }, [pageClass]);

  const deleteHandler = (id) => {
    setDeleteBank(id);

    // state에 저장한 데이터 넘기기
    let body = {
      accountId: deleteBank,
      signature: true,
    }
    deleteData(body);
  }

  return (
    <div className={componentClass}>
    <div item={item.idx} key={idx}>
      <h4>{item.bankName}</h4>
      <p>{item.accountNumber}</p>
      <span>{formatPrice(item.balance)}</span>
      <button value={item.id} onClick={(e) => {deleteHandler(e.target.value)}}>삭제</button>
    </div>
    </div>
  )
}