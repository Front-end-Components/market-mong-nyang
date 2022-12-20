import React, { useEffect, useState } from 'react';
import { hideLoading, showLoading } from '@/store/loadingSlice';
import { useDispatch } from 'react-redux';
import MypageHeader from '../components/MypageHeader';
import Account from '@/components/Account';
import MyAccountForm from './MyAccountForm';
import { getListBank, getListAccount } from '@/api/requests';
import { formatPrice } from '@/utils/formats';
import style from './MyAccount.module.scss';
import classNames from 'classnames/bind';
import { RiErrorWarningLine } from 'react-icons/ri';
import {AccountModal} from '@/components/Modal';

const cx = classNames.bind(style);

export default function MyAccount() {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [account, setAccounts] = useState([]);
  const [banks, setBanks] = useState([]);
  const [accoutForm, setAccoutForm] = useState(false);

  useEffect(() => {
    // 등록된 계좌 조회
    async function getAccountData() {
      try {
        dispatch(showLoading());  // 로딩
        const dataA = await getListAccount();
        const dataB = await getListBank();
        setAccounts(dataA);
        setBanks(dataB);
      } catch {
        setModal(true);
      } finally {
        dispatch(hideLoading());  // 로딩
      }
    }
    getAccountData();
  }, []);

  return (
    <div className={style.container}>
      {
        modal ? <AccountModal modal={modal} setModal={setModal} /> : null
      }
      <MypageHeader name={'계좌 관리'} />
      {
        Array.isArray(account.accounts) ? <p className={style.totalBalance}>총 계좌 잔액: <span>{formatPrice(account.totalBalance)}</span></p> : null
      }
      {Array.isArray(account.accounts) ? (
        account.accounts.map((item, idx) => {
          return  <Account pageClass={cx('myAccount')} item={item} key={idx} setAccounts={setAccounts} />
        })
      ) : (
        <div className={style.noList}>
          <RiErrorWarningLine color='lightgray' size='50' title='닫기' />
          <h4>등록된 계좌가 없습니다.</h4>
        </div>
      )}
      {
        //banks.map((item, index) => item.disabled && <p key={index}>{item.name}</p>)
        !banks.disabled === true ? null : <button onClick={() => {setAccoutForm(true); document.body.style.overflow = 'hidden';}} className={style.button}>계좌 추가</button>
      }
      {
        accoutForm === true ? <MyAccountForm banks={banks} setBanks={setBanks} setAccoutForm={setAccoutForm} /> : null
      }
    </div>
  )
}