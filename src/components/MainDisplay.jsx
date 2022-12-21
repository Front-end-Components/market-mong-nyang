import React from 'react';
import style from './MainDisplay.module.scss';
import Product from '../components/Product.jsx'
import ProductHeader from '../components/ProductHeader';
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import { Pagination, Navigation, Autoplay } from "swiper";

export default function MainDisplay({data, name}) {

  return (
    <div className={style.mainProduct}>
      <div className={style.container}>
        <ProductHeader name={name} className={style.header} />
        <div className={style.row}>
        <Swiper
      className={style.swiper}
      modules = {[Pagination, Navigation, Autoplay]}
      loop={true} // 루프 슬라이드
      autoplay={{ delay: 1000 }} // 자동 슬라이드
      spaceBetween={-200} // 슬라이드간의 간격
      slidesPerView={5} // 한 번에 보여지는 슬라이드 개수
      loopAdditionalSlides={1} // 뒤에 미리 준비해 두는 슬라이드 개수
      style={{
        "--swiper-navigation-color": "#404040",
        "--swiper-navigation-size": "40px",
        "--swiper-pagination-color": "#404040"
      }}
      breakpoints= {{
        1800:{
          slidesPerView:5,             
          },
        1320:{
          slidesPerView:4,             
          },
        1024:{
          slidesPerView:3,             
          },
        0:{
          slidesPerView:2, 
          }
      }}
    >
            {data.map((product) => {
                return <SwiperSlide key={product.id}><Product products={product} className={style.product} /></SwiperSlide>
              })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}