import React, { useEffect, useState } from 'react';
import { HiOutlineHeart, HiHeart } from 'react-icons/hi';

export default function Like({ like }){
  return (
    <>
      {
        like === true ? <HiHeart size='27' title='찜' color='#5f0080' /> : <HiOutlineHeart size='27' title='찜' color='black' />
      }
    </>
  )
}