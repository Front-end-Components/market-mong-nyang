import { selectListOrderAdmin } from '@/api/requests';
import AdminOrderItem from '@/components/admin/AdminOrderItem';
import AdminProductItem from '@/components/admin/AdminProductItem';
import Button from '@/components/Button';
import Pagination from '@/components/Pagination';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import style from './Orders.module.scss';

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 10;
  const offset = (page - 1) * limit;

  useEffect(() => {
    async function getData() {
      const data = await selectListOrderAdmin();
      setOrders(data);
    }
    getData();
  }, []);

  return (
    <div>
      <ul className={style.orderList}>
        <li>
          <input type='checkbox' name='' id='' />
          <div>
            <span>NO</span>
            <span>상품명</span>
            <span>가격</span>
            <span>거래자</span>
            <span>거래은행</span>
            <span>거래시간</span>
            <span>취소여부</span>
            <span>완료여부</span>
          </div>
        </li>
        {Array.isArray(orders) ? (
          orders.slice(offset, offset + limit).map((item, idx) => {
            return <AdminOrderItem key={item.detailId} item={item} idx={idx + 1 * offset} />;
          })
        ) : (
          <li>거래 내역이 없습니다.</li>
        )}
      </ul>
      <div className={style.buttons}>
        <Button name={'삭제'} />
        {Array.isArray(orders) ? <Pagination total={orders.length} limit={limit} page={page} setPage={setPage} /> : null}
        <Link to='/admin/products/add'>
          <Button name={'등록'} isPurple={true} />
        </Link>
      </div>
    </div>
  );
}
