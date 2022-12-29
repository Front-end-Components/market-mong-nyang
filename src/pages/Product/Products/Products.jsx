import React from 'react';
import ProductList from '@/components/Product/ProductList/ProductList';
import { useParams } from 'react-router-dom'; 

export default function Products() {
  const { category } = useParams();

  return (
    <>
    {
      category === 'food' ? 
      <div className='food'>
        <ProductList tag1={'주식'} tag2={'간식'} category={'주식 / 간식'} />
      </div> : null
    }
    {
      category === 'care' ? 
      <div className='care'>
        <ProductList tag1={'건강'} tag2={'케어'} category={'건강 / 케어'} />
      </div> : null
    }
    {
      category === 'living' ? 
      <div className='living'>
        <ProductList tag1={'의류'} tag2={'리빙'} category={'의류 / 리빙'} />
      </div> : null
    }
    {
      category === 'hygiene' ? 
      <div className='hygiene'>
        <ProductList tag1={'외출'} tag2={'위생'} category={'외출 / 위생'} />
      </div> : null
    }
    </>
  );
}