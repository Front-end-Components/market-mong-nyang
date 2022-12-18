import React, { useEffect, useState } from 'react';
import { insertOrder } from '@/api/requests';

export default function PaymentItem (productId, accountId, count) {
  const data = {
    productId: productId,
    accountId: accountId
  }
  
  if(count > 1) {
    for(let i = 0; i < count; i++) {
      insertOrder(data);
    }
  } else {
    insertOrder(data);
  }
}