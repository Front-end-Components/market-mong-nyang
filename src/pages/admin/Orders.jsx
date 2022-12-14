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
import { GrPowerReset } from 'react-icons/gr';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { data } from 'autoprefixer';
import { formatDate } from '@/utils/formats';

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [search, setSearch] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 10;
  const offset = (page - 1) * limit;
  // const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState();

  const CustomInput = ({ value, onClick }) => (
    <button className={style.customInput} onClick={onClick}>
      {value ? value : `거래일자 선택`}
    </button>
  );

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

  const handleSearch = (newDate) => {
    const search = document.querySelector('.order-search').value;
    const selectDate = newDate ? formatDate(newDate) : date ? formatDate(date) : '';
    let copy = [...orders];
    copy = copy.filter((item) => item.user.displayName.includes(search));
    if (selectDate) {
      copy = copy.filter((item) => item.timePaid.slice(0, 10).replace(/-/g, '.') === selectDate.slice(0, 10));
    }
    setSearch(copy);
  };

  const handleKeyup = (event) => {
    if (event.key === 'Enter') handleSearch();
  };

  const handleDatePicker = (newDate) => {
    setDate(newDate);
    handleSearch(newDate);
  };

  const handleReset = () => {
    setDate();
    document.querySelector('.order-search').value = '';
    handleSearch();
  };

  return (
    <div>
      {loading ? <Loading /> : null}
      <div className={style.searchWrap}>
        <h1>거래 내역 관리</h1>
        <div className={style.search}>
          <div className={style.inputWrap}>
            <input className='order-search' type='text' placeholder='거래자명을 입력해 주세요.' onKeyUp={handleKeyup} />
            <button className={style.searchBtn} onClick={() => handleSearch()}>
              <BiSearch size='24' color='rgb(95, 0, 128)' title='검색' />
            </button>
          </div>
          <div className={style.datePickerWrap}>
            <DatePicker className={style.datePicker} selected={date} onChange={handleDatePicker} dateFormat='yyyy.MM.dd' customInput={<CustomInput />} />
          </div>
          <button className={style.searchReset} onClick={handleReset}>
            <GrPowerReset color='rgb(95, 0, 128)' size='16' title='초기화' />
          </button>
        </div>
      </div>
      <ul className={style.orderList}>
        <li>
          <input type='checkbox' name='' id='' />
          <div>
            <span>NO</span>
            <span>상품명</span>
            <span>가격</span>
            <span>거래자</span>
            <span>거래은행</span>
            <span>거래일시</span>
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
    </div>
  );
}
