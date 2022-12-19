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

const cx = classNames.bind(style);

export default function MyAccount() {
  const dispatch = useDispatch();
  const [account, setAccounts] = useState([]);
  const [banks, setBanks] = useState([]);
  const [accoutForm, setAccoutForm] = useState(false);

  useEffect(() => {
    // 등록된 계좌 조회
    async function getAccountData() {
      try {
        // 로딩 보여주기
        dispatch(showLoading());
        const data = await getListAccount();
        let copy = [...data];
        setAccounts(copy);
      } catch {
        alert('계좌정보 불러오기 실패');
      } finally {
        // 로딩 숨기기
        dispatch(hideLoading());
      }
    }
    getAccountData();

    // 사용 가능한 은행 조회
    async function getBankData() {
      try {
        // 로딩 보여주기
        dispatch(showLoading());
        const data = await getListBank();
        let copy = [...data];
        setBanks(copy);
      } catch {
        alert('은행 불러오기 실패');
      } finally {
        // 로딩 숨기기
        dispatch(hideLoading());
      }
    }
    getBankData();
  }, []);

  return (
    <div className={style.container}>
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
