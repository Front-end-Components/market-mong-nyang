import { getListOrderAdmin } from '@/api/requests';
import AdminOrderItem from '@/components/admin/AdminOrderItem';
import Button from '@/components/Button';
import Pagination from '@/components/Pagination';
// import { hideLoading, showLoading } from '@/store/loadingSlice';
import React, { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import style from './Orders.module.scss';
import Loading from '@/components/Loading';
import { BiSearch } from 'react-icons/bi';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [search, setSearch] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 10;
  const offset = (page - 1) * limit;
  // const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    async function getData() {
      setLoading(true);
      const data = await getListOrderAdmin();
      setOrders(data);
      setSearch(data);
      setLoading(false);
    }
    // dispatch(showLoading());
    getData();
    // dispatch(hideLoading());
  }, []);

  const handleSearch = () => {
    const search = document.querySelector('.order-search').value;
    let copy = [...orders];
    copy = copy.filter((item) => item.product.title.includes(search));
    setSearch(copy);
  };

  const handleKeyup = (event) => {
    if (event.key === 'Enter') handleSearch();
  };

  return (
    <div>
      {loading ? <Loading /> : null}
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
        {Array.isArray(search) ? (
          search.slice(offset, offset + limit).map((item, idx) => {
            return <AdminOrderItem key={item.detailId} item={item} idx={idx + 1 * offset} />;
          })
        ) : (
          <li>거래 내역이 없습니다.</li>
        )}
      </ul>
      <div className={style.buttons}>{Array.isArray(search) ? <Pagination total={search.length} limit={limit} page={page} setPage={setPage} /> : null}</div>
      <div className={style.search}>
        <div className={style.inputWrap}>
          <input className='order-search' type='text' placeholder='상품명을 입력해 주세요.' onKeyUp={handleKeyup} />
          <button onClick={handleSearch}>
            <BiSearch size='24' color='rgb(95, 0, 128)' title='검색' />
          </button>
        </div>
        <DatePicker selected={date} onChange={(date) => setDate(date)} dateFormat='yyyy.MM.dd' />
      </div>
    </div>
  );
}
