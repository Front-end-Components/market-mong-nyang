import React from 'react';
import Products from '@/components/Products';

export default function ProductsHygiene() {
  
  return (
    <div className='hygiene'>
      <Products tag1={'외출'} tag2={'위생'} category={'외출 / 위생'} />
    </div>
  );
}