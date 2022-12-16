import React, { useEffect, useState } from 'react';
import { getListBank } from '@/api/requests';
import style from './MyAccountForm.module.scss';

export default function MyAccountForm() {
  const [banks, setBanks] = useState([]);

  useEffect(() => {
    async function getData() {
      const data = await getListBank();
      setBanks(data);
    }
    getData();
  }, []);

  return (
    <div className={style.accountAddForm}>
      <h3>계좌 추가</h3>
      <ul>
      {
        banks.map((item, idx) => {
          return  <li item={item} key={idx}>
                    <h4>{item.name}</h4>
                  </li>
        })
      }
      </ul>
    </div>
  )
}
