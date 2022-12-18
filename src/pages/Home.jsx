import React from 'react';
import Banner from '../components/Banner';
import BannerMedium from '../components/BannerMedium';
import './Home.module.scss';

export default function Home() {
  return (
    <div className='container'>
      <Banner />
      <BannerMedium />
    </div>
  );
}
