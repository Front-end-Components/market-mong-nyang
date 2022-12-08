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
      <img src="https://product-image.kurly.com/cdn-cgi/image/format=auto/banner/main/pc/img/b474b6a1-5077-4800-947d-6e7b1929a37a.jpg" alt="" className={style.image}/>
      </a>
      </SwiperSlide>
    <SwiperSlide className={style.slide}>
      <a href="">
      <img src="https://product-image.kurly.com/cdn-cgi/image/format=auto/banner/main/pc/img/b474b6a1-5077-4800-947d-6e7b1929a37a.jpg" alt="" className={style.image}/>
      </a>
    </SwiperSlide>
    <SwiperSlide className={style.slide}>
      <a href="">
      <img src="https://product-image.kurly.com/cdn-cgi/image/format=auto/banner/main/pc/img/b474b6a1-5077-4800-947d-6e7b1929a37a.jpg" alt="" className={style.image} />
      </a>
    </SwiperSlide>
    <SwiperSlide className={style.slide}>
      <a href="">
      <img src="https://product-image.kurly.com/cdn-cgi/image/format=auto/banner/main/pc/img/a916f9a1-e2e2-4600-b856-206490758140.jpg" alt="" className={style.image} />
      </a>
    </SwiperSlide>
    <SwiperSlide className={style.slide}>
      <a href="">
      <img src="https://product-image.kurly.com/cdn-cgi/image/format=auto/banner/main/pc/img/20139e33-d871-4de9-a2e8-18a3024af36d.jpg" alt="" className={style.image} />
      </a>
    </SwiperSlide>
    </Swiper>
    </div>
  );
}