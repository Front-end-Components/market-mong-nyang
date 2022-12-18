import React from 'react';
import Products from '@/components/Products';

export default function ProductsFood() {
  
  return (
    <div className='food'>
      <Products tag1={'주식'} tag2={'간식'} category={'주식 / 간식'} />
    </div>
  );
}