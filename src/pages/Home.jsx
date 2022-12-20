import React from 'react';
import BannerMain from '../components/BannerMain';
import BannerMedium from '../components/BannerMedium';
import Products from '../components/Products';
import './Home.module.scss';

export default function Home() {
  return (
    <div className='container'>
      <BannerMain />
      <BannerMedium />
    </div>
  );
}
