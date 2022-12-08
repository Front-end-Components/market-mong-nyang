import { selectListOrderAdmin } from '@/api/requests';
import React from 'react';

export default function Orders() {
  const res = selectListOrderAdmin();
  return (
    <div>
      {res.data || <div>거래 내역이 없습니다.</div>}

      <div>
        <ul>
          <li></li>
        </ul>
      </div>
    </div>
  );
}
