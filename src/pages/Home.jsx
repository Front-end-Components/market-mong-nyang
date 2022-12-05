import React from 'react';
import Banner from '../components/Banner';
import Products from '../components/Products';
import './Home.module.scss';

export default function Home() {
  return (
    <div className='container'>
      <Banner />
      <Products />
    </div>
  );
}
