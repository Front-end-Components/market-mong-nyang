import React from 'react';
import ProductList from '@/components/Product/ProductList/ProductList';

export default function ProductsCare() {
  
  return (
    <div className='care'>
      <ProductList tag1={'건강'} tag2={'케어'} category={'건강 / 케어'} />
    </div>
  );
}