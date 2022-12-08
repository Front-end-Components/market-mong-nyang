import React from 'react';
import style from './Account.module.scss';
// import { useEffect, useState } from "react";
import { account } from '../data/data';

export default function Account() {
  //let [계좌, 계좌변경] = useState(selectBanks);
  console.log(account.accounts);
  return (
  <div>
    
    <div className={style.accountContent}>
      <span className={style.title}>계좌 간편결제</span>
      {/* 스위퍼 */}
      <div className={style.slide}>
        <ul>
          {
            account.accounts.map((a, i) => {
              return (
                <li className={style.list} i={i} key={i}>
                  <h4>{account.accounts[i].bankName}</h4>
                  <p>{account.accounts[i].accountNumber}</p>
                  <span>{account.accounts[i].balance}</span>
                </li>
              )
            })
          }
          {/* 계좌목록 */}
          {/* 계좌등록 */}
        </ul>
      </div>
    </div>
  </div>
  )
}

// function getBank() {
//   return (
//     <div className='container'>
      
//     </div>
//   );
// }

// function getAccount() {
//   return (
//     <div className='container'>
      
//     </div>
//   );
// }