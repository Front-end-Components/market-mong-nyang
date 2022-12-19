import React, { useState } from 'react';
import { hideLoading, showLoading } from '@/store/loadingSlice';
import { useDispatch } from 'react-redux';
import { insertAccount } from '@/api/requests';
import style from './MyAccountForm.module.scss';
import { GrClose } from 'react-icons/gr';

export default function MyAccountForm({ banks, setBanks, setAccoutForm }) {
  const dispatch = useDispatch();
  const [bankCode, setBankCode] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  // 계좌 추가
  async function postData(body) {
    try {
      dispatch(showLoading());  // 로딩
      const data = await insertAccount(body);
      let copy = [...data];
      setBanks(copy);
      alert("계좌가 등록됐습니다.");
      setAccoutForm(false);
      document.body.style.overflow = 'auto';
      // 초기화
      setBankCode('');
      setAccountNumber('');
      setPhoneNumber('');
    } catch {
      alert("계좌 등록이 실패했습니다.");
      // 초기화
      setBankCode('');
      setAccountNumber('');
      setPhoneNumber('');
    } finally {
      dispatch(hideLoading());  // 로딩
    }
  }

  const bankCodeHandle = (e) => {
    e.preventDefault();
    setBankCode(e.target.value);
  }

  const accountNumberhandle = (e) => {
    e.preventDefault();
    setAccountNumber(e.target.value);
  }

  const phoneNumberhandle = (e) => {
    e.preventDefault();
    setPhoneNumber(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (bankCode === '') return alert("은행코드를 입력해주세요.");
    if (accountNumber === '') return alert("계좌번호를 입력해주세요.");
    if (phoneNumber === '') return alert("전화번호를 입력해주세요.");

    // state에 저장한 데이터 넘기기
    let body = {
      bankCode: bankCode,
      accountNumber: accountNumber,
      phoneNumber: phoneNumber,
      signature: true,
    }
    postData(body);
  };

  return (
    <div className={style.accountAddForm}>
      <div  className={style.container}>
      <h2>계좌 추가</h2>
      <span className={style.closeBtn} onClick={() => {setAccoutForm(false); document.body.style.overflow = 'auto';}}>
        <GrClose size='25' title='닫기' />
      </span>
      <form onSubmit={submitHandler}>
        <ul>
          {banks.map((item, idx) => (
            (item.disabled === false) ?
              <li item={item.code} key={idx}>
                <input type="radio" name='bankChoice' onChange={() => {setBankCode(item.code)}} id={item.code} />
                <label for={item.code}><span></span>{item.name}</label>
                <p>[{item.digits}]</p>
              </li> : null
          ))}
        </ul>
        <div className={style.textForm}>
          <span>은행 코드</span>
          <input type="text" placeholder="연결할 은행 코드를 입력해주세요." bankCode={bankCode} value={bankCode}
            onChange={(e) => bankCodeHandle(e)}
          />
        </div>
        <div className={style.textForm}>
          <span>계좌번호</span>
          <input type="text" placeholder="연결할 계좌번호를 입력해주세요." accountNumber={accountNumber} value={accountNumber}
            onChange={(e) => accountNumberhandle(e)}
          />
        </div>
        <div className={style.textForm}>
          <span>전화번호</span>
          <input type="text" placeholder="사용자 전화번호를 입력해주세요." phoneNumber={phoneNumber} value={phoneNumber}
            onChange={(e) => phoneNumberhandle(e)}
          />
        </div>
        <div className={style.notice}>
          <p>· 추가할 은행을 선택하면 은행코드가 입력 됩니다.</p>
          <p>· 계좌번호와 전화번호에는 - 구분이 없어야 합니다.</p>
          <p>· 은행 [] 안의 숫자를 모두 더하면 각 은행의 유효한 계좌번호 길이가 됩니다.</p>
        </div>
        <input type="submit" className={style.submit} value="추가" />
      </form>
      </div>
    </div>
  )
}
