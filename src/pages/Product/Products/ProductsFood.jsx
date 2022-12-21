import React from 'react';
import ProductList from '@/components/Product/ProductList/ProductList';

export default function ProductsFood() {
  
  return (
    <div className='food'>
      <ProductList tag1={'주식'} tag2={'간식'} category={'주식 / 간식'} />
    </div>
  );
}