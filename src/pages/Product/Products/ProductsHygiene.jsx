import React from 'react';
import ProductList from '@/components/Product/ProductList/ProductList';

export default function ProductsHygiene() {
  
  return (
    <div className='hygiene'>
      <ProductList tag1={'외출'} tag2={'위생'} category={'외출 / 위생'} />
    </div>
  );
}