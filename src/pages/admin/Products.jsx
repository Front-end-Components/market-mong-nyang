import { selectListProductAdmin } from '@/api/requests';
import React from 'react';
import { Link } from 'react-router-dom';
import style from './Products.module.scss';

export default function Products() {
  const res = selectListProductAdmin();
  return (
    <div>
      <div className={style.buttons}>
        <button>삭제</button>
        <Link to='/admin/products/add'>
          <button>등록</button>
        </Link>
      </div>
      {res.data || <div>등록된 상품이 없습니다.</div>}
      <ul>
        <li></li>
      </ul>
    </div>
  );
}
