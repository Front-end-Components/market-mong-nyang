import React from 'react';
import { insertOrder } from '@/api/requests';

export default function PaymentItem (item, accountId) {
  item.map((item) => {
    const data = {
      productId: item.id,
      accountId: accountId
    }
    if(item.count > 1) {
      for(let i = 0; i < item.count; i++) {
        insertOrder(data);
      }
    } else {
      insertOrder(data);
    }
    });
}