import React, { useEffect, useState } from 'react';
import MypageHeader from '../components/MypageHeader';
import Account from '@/components/Account';
import { getListAccount } from '@/api/requests';
import { formatPrice } from '@/utils/formats';
import style from './MyAccount.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

export default function MyAccount() {
  const [account, setAccounts] = useState([]);

  useEffect(() => {
    async function getData() {
      const data = await getListAccount();
      setAccounts(data);
    }
    getData();
  }, []);

  return (
    <div className={style.container}>
      <MypageHeader name={'계좌 관리'} />
      {
        Array.isArray(account.accounts) ? <p className={style.totalBalance}>총 계좌 잔액: <span>{formatPrice(account.totalBalance)}</span></p> : null
      }
      {Array.isArray(account.accounts) ? (
        account.accounts.map((item, idx) => {
          return  <Account pageClass={cx('myAccount')} item={item} key={idx} />
        })
      ) : (
        <div className={style.noList}>
          <h4>등록된 계좌가 없습니다.</h4>
        </div>
      )}
    </div>
  )
}
