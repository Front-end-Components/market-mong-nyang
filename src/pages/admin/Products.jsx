import { selectListProductAdmin } from '@/api/requests';
import AdminProductItem from '@/components/admin/AdminProductItem';
import Button from '@/components/Button';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import style from './Products.module.scss';

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getData() {
      const data = await selectListProductAdmin();
      setProducts(data);
    }
    getData();
  }, []);

  return (
    <div>
      <div className={style.buttons}>
        <Button name={'삭제'} />
        <Link to='/admin/products/add'>
          <Button name={'등록'} isPurple={true} />
        </Link>
      </div>
      <ul className={style.productList}>
        <li>
          <span></span>
          <span>NO</span>
          <span>상품명</span>
          <span>가격</span>
          <span>품절여부</span>
        </li>
        {Array.isArray(products) ? (
          products.map((item, idx) => {
            return <AdminProductItem key={item.id} item={item} idx={idx} />;
          })
        ) : (
          <li>등록된 상품이 없습니다.</li>
        )}
      </ul>
    </div>
  );
}
