import React from 'react';
import style from './BannerMedium.module.scss';
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import { Pagination, Autoplay } from "swiper";
import "swiper/scss"; //basic
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import ProductHeader from '../components/ProductHeader';


export default function BannerMedium() {
  return (
    <div className={style.banner_m}>
    <div className={style.title}>
      <ProductHeader className={style.header} name={'이 상품 어때요?'} isMedium={true} />
    </div>
    <Swiper
      className={style.swiper}
      modules = {[Pagination, Autoplay]}
      pagination={{ clickable : true }}
      loop={true} // 루프 슬라이드
      autoplay={{ delay: 4000 }} // 자동 슬라이드
      spaceBetween={10} // 슬라이드간의 간격
      slidesPerView={4} // 한 번에 보여지는 슬라이드 개수
      style={{
        "--swiper-navigation-color": "#43007c",
        "--swiper-navigation-size": "40px",
        "--swiper-pagination-color": "#43007c"
      }}
      breakpoints= {{
        1800:{
          slidesPerView:5,             
          },
        1350:{
          slidesPerView:4,             
          },
        1320:{
          slidesPerView:3,             
          },
        1024:{
          slidesPerView:2,             
          },
        0:{
          slidesPerView:1, 
          }
      }}
    >
    <SwiperSlide className={style.slide}>
      <a href="/products/4DRGV6C2jyXXcTvWcYuI">
      <img src="https://storage.googleapis.com/heropy-api/voUSpW7ZuKv093603.jpg" alt="" className={style.image}/>
      </a>
      </SwiperSlide>
      <SwiperSlide className={style.slide}>
      <a href="/products/DHdOu0fSH8jrrJLrb8Di">
      <img src="https://storage.googleapis.com/heropy-api/vOHy9U4Txbv094105.jpg" alt="" className={style.image}/>
      </a>
      </SwiperSlide>
      <SwiperSlide className={style.slide}>
      <a href="/products/1la7S5fJx74RMYXD39fT">
      <img src="https://storage.googleapis.com/heropy-api/vR2mfbfr_7v090956.jpg" alt="" className={style.image}/>
      </a>
      </SwiperSlide>
      <SwiperSlide className={style.slide}>
      <a href="/products/3bdodWXahcx3EBvDHj6I">
      <img src="https://storage.googleapis.com/heropy-api/vZo3EQ2QLXv083138.png" alt="" className={style.image}/>
      </a>
      </SwiperSlide>
      <SwiperSlide className={style.slide}>
      <a href="/products/yZC7r2wzAuFxtDtWSmI3">
      <img src="https://storage.googleapis.com/heropy-api/vBtlR9KeUIv151542.jpg" alt="" className={style.image}/>
      </a>
      </SwiperSlide>
    </Swiper>
    </div>
  );
}
