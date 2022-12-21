import React from 'react';

import ProductList from '@/components/Product/ProductList/ProductList';

export default function ProductsLiving() {
  
  return (
    <div className='living'>
      <ProductList tag1={'의류'} tag2={'리빙'} category={'의류 / 리빙'} />
    </div>
  );
}