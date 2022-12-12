import React, { useEffect, useState } from 'react';
import style from './Account.module.scss';
import { selectListAccount } from '@/api/requests';
import { account } from '@/data/data';
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import { Pagination } from "swiper";
import "swiper/scss"; //basic
import "swiper/scss/pagination";

export default function Account() {
  //let [계좌, 계좌변경] = useState(selectBanks);
  console.log(selectListAccount());

  const [accountData, setProducts] = useState([]);

  useEffect(() => {
    async function getData() {
      const data = await selectListAccount();
      setProducts(data);
    }
    getData();
  }, []);
  
  return (
  <div className={style.accountContent}>
    <span className={style.title}>계좌 간편결제</span>
    {/* 스위퍼 */}
    <div className={style.slide}>
      <Swiper
        modules = {[Pagination]}
        pagination={{ clickable : true }}
        loop={true} // 루프 슬라이드
        spaceBetween={10} // 슬라이드간의 간격
        slidesPerView={2} // 한 번에 보여지는 슬라이드 개수
        style={{
          "--swiper-pagination-color": "#43007c"
        }}
      >
        {
          account.accounts.map((a, i) => {
            return (
              <SwiperSlide onClick i={i} key={i} className={style.list}>
                <h4>{account.accounts[i].bankName}</h4>
                <p>{account.accounts[i].accountNumber}</p>
                <span>{account.accounts[i].balance}</span>
              </SwiperSlide>
            )
          })
        }
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