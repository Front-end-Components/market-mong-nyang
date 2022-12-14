import { useState, useEffect } from 'react';
import style from './Account.module.scss';
import { formatPrice } from '@/utils/formats';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

export default function Account({ item, idx, pageClass }) {
  const [componentClass, setComponentClass] = useState(null);

  useEffect(() => {
    const moduleClass = cx('account');
    const classResult = !pageClass ? `${moduleClass}` : `${moduleClass} ${pageClass}`;

    setComponentClass(classResult);
  }, [pageClass]);

  return (
    <div className={componentClass}>
    <div item={item.idx} key={idx}>
      <h4>{item.bankName}</h4>
      <p>{item.accountNumber}</p>
      <span>{formatPrice(item.balance)}</span>
      <button className={item.id}>삭제</button>
    </div>
    </div>
  )
}