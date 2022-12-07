import React from 'react';
import style from './Banner.module.scss';
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/scss"; //basic
import "swiper/scss/pagination";
import "swiper/scss/navigation";


export default function Banner() {
  return (
    <div className={style.banner}>
      <Swiper
      modules = {[Pagination, Navigation, Autoplay]}
      pagination={{ clickable : true }}
      loop={true} // 루프 슬라이드
      autoplay={{ delay: 4000 }} // 자동 슬라이드
      spaceBetween={0} // 슬라이드간의 간격
      slidesPerView={1} // 한 번에 보여지는 슬라이드 개수
      navigation
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      style={{
        "--swiper-navigation-color": "#43007c",
        "--swiper-pagination-color": "#43007c"
      }}
    >
    <SwiperSlide className={style.slide}>
      <a href="#">
      <img src="https://product-image.kurly.com/cdn-cgi/image/format=auto/banner/main/pc/img/88b298cf-de5a-4cf9-81d6-5ca180c2b6c5.jpg" alt="" className={style.image}/>
      </a>
      </SwiperSlide>
    <SwiperSlide className={style.slide}>
      <a href="">
      <img src="https://product-image.kurly.com/cdn-cgi/image/format=auto/banner/main/pc/img/1eef26f1-31a8-410a-b2b6-866ab59d9c93.jpg" alt="" className={style.image}/>
      </a>
    </SwiperSlide>
    <SwiperSlide className={style.slide}>
      <a href="">
      <img src="https://product-image.kurly.com/cdn-cgi/image/format=auto/banner/main/pc/img/7ee9376a-ac1c-4e3e-972b-0a72e01d5803.png" alt="" className={style.image} />
      </a>
    </SwiperSlide>
    <SwiperSlide className={style.slide}>
      <a href="">
      <img src="https://product-image.kurly.com/cdn-cgi/image/format=auto/banner/main/pc/img/8f74bcc8-8f8a-410e-8cf3-62828cd5e3d5.jpg" alt="" className={style.image} />
      </a>
    </SwiperSlide>
    <SwiperSlide className={style.slide}>
      <a href="">
      <img src="https://product-image.kurly.com/cdn-cgi/image/format=auto/banner/main/pc/img/29046e9d-e1b1-4e6c-8e6f-3ed0fe592bc7.jpg" alt="" className={style.image} />
      </a>
    </SwiperSlide>
    </Swiper>
    </div>
  );
}