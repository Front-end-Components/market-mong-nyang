import React from 'react';
import style from './Products.module.scss';
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/scss"; //basic
import "swiper/scss/pagination";
import "swiper/scss/navigation";


export default function Products() {
  return (
    <div className={style.products}>
    <div className={style.title}>
      <p>이 상품 어때요?</p>
    </div>
    <Swiper
      className={style.swiper}
      modules = {[Pagination, Navigation, Autoplay]}
      pagination={{ clickable : true }}
      loop={true} // 루프 슬라이드
      autoplay={{ delay: 4000 }} // 자동 슬라이드
      spaceBetween={10} // 슬라이드간의 간격
      slidesPerView={4} // 한 번에 보여지는 슬라이드 개수
      navigation
      style={{
        "--swiper-navigation-color": "#404040",
        "--swiper-navigation-size": "40px",
        "--swiper-pagination-color": "#404040"
      }}
      breakpoints= {{
        1800:{
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
      <a href="#">
      <img src="https://cdn-pro-web-241-106-godomall.spdycdn.net/bienbien3_godomall_com/data/goods/22/11/48/1000000897/1000000897_main_086.jpg" alt="" className={style.image}/>
      </a>
      </SwiperSlide>
      <SwiperSlide className={style.slide}>
      <a href="#">
      <img src="https://cdn-pro-web-241-106-godomall.spdycdn.net/bienbien3_godomall_com/data/goods/22/11/48/1000000897/1000000897_main_086.jpg" alt="" className={style.image}/>
      </a>
      </SwiperSlide>
      <SwiperSlide className={style.slide}>
      <a href="#">
      <img src="https://cdn-pro-web-241-106-godomall.spdycdn.net/bienbien3_godomall_com/data/goods/22/11/48/1000000897/1000000897_main_086.jpg" alt="" className={style.image}/>
      </a>
      </SwiperSlide>
      <SwiperSlide className={style.slide}>
      <a href="#">
      <img src="https://cdn-pro-web-241-106-godomall.spdycdn.net/bienbien3_godomall_com/data/goods/22/11/48/1000000897/1000000897_main_086.jpg" alt="" className={style.image}/>
      </a>
      </SwiperSlide>
      <SwiperSlide className={style.slide}>
      <a href="#">
      <img src="https://cdn-pro-web-241-106-godomall.spdycdn.net/bienbien3_godomall_com/data/goods/22/11/48/1000000897/1000000897_main_086.jpg" alt="" className={style.image}/>
      </a>
      </SwiperSlide>
    </Swiper>
    </div>
  );
}
