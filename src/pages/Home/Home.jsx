import React from 'react';
import style from './Home.module.scss';
import BannerMain from '@/components/Home/BannerMain/BannerMain';
import BannerSub from '@/components/Home/BannerSub/BannerSub';
import './Home.module.scss';
import { bestProducts, xmasProducts, careProducts } from '../../data/data'
import MainDisplay from '@/components/Home/MainDisplay/MainDisplay';

export default function Home() {
  return (
    <div className={style.container}>
      <BannerMain />
      <BannerSub />
      <MainDisplay data={bestProducts} name={'이번주 베스트 상품 🏆'} />
      <MainDisplay data={xmasProducts} name={'멍냥이에게 산타가 될 시간🎅🏻'} />
      <MainDisplay data={careProducts} name={'집사가 인정한 필수 케어 상품 🪥'} />
    </div>
  );
}
