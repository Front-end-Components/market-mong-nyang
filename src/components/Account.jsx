import React, { useEffect, useState } from 'react';
import style from './Account.module.scss';
import { selectListAccount } from '@/api/requests';
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import { Pagination } from "swiper";
import "swiper/scss"; //basic
import "swiper/scss/pagination";

export default function Account() {
  const [account, setAccounts] = useState([]);

  useEffect(() => {
    async function getData() {
      const data = await selectListAccount();
      setAccounts(data);
    }
    getData();
  }, []);
  
  return (
  <div className={style.accountContent}>
    <span className={style.title}>계좌 간편결제</span>
    <p className={style.totalBalance}>총 계좌 잔액: <span>{account.totalBalance}</span></p>
    <div className={style.slide}>
      <Swiper
        modules = {[Pagination]}
        pagination={{ clickable : true }}
        loop={false} // 루프 슬라이드
        spaceBetween={10} // 슬라이드간의 간격
        slidesPerView={1} // 한 번에 보여지는 슬라이드 개수
        style={{
          "--swiper-pagination-color": "#43007c"
        }}
      >
        {Array.isArray(account.accounts) ? (
          account.accounts.map((item, idx) => {
            return (
              <SwiperSlide onClick item={item.idx} key={idx} className={style.list}>
                <h4>{item.bankName}</h4>
                <p>{item.accountNumber}</p>
                <span>{item.balance}</span>
              </SwiperSlide>
            )
          })
        ) : (
          <SwiperSlide className={style.list}>
            <h4>등록된 계좌가 없습니다.</h4>
          </SwiperSlide>
        )}
      </Swiper>
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