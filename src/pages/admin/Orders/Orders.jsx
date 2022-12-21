import React, { useEffect, useState } from 'react';
import { hideLoading, showLoading } from '@/store/loadingSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getListOrderAdmin } from '@/api/requests';
import AdminOrderItem from '@/components/admin/AdminOrderItem/AdminOrderItem';
import Pagination from '@/components/common/Pagination';
import style from './Orders.module.scss';
import { BiSearch } from 'react-icons/bi';
import { GrPowerReset } from 'react-icons/gr';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { formatDate } from '@/utils/formats';
import { initOrderStore, setOrdersStore } from '@/store/ordersSlice';
import { setProductsStore } from '@/store/productsSlice';

export default function Orders() {
  const dispatch = useDispatch();
  const [orders, setOrders] = useState([]);
  const [search, setSearch] = useState([]);
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState('');
  const limit = 10;
  const offset = (page - 1) * limit;
  const [date, setDate] = useState();

  let storedOrders = useSelector((state) => {
    return state.orders.data;
  });
  let storedPage = useSelector((state) => {
    return state.orders.page;
  });

  useEffect(() => {
    dispatch(setProductsStore({ page: 0 }));
    if (storedPage > 0) {
      setPage(storedPage);
    }
    if (storedOrders.length === 0) {
      async function getData() {
        try {
          dispatch(showLoading());
          let data = await getListOrderAdmin();
          data = data.sort((a, b) => new Date(b.timePaid) - new Date(a.timePaid));
          setOrders(data);
          setSearch(data);
          dispatch(setOrdersStore({ data }));
        } catch {
          alert('거래 목록을 조회하지 못했습니다.');
        } finally {
          dispatch(hideLoading());
        }
      }
      getData();
    } else {
      dispatch(showLoading());
      setOrders(storedOrders);
      setSearch(storedOrders);
      dispatch(hideLoading());
    }
  }, []);

  useEffect(() => {
    if (date === '') {
      handleSearch();
    }
  }, [date]);

  useEffect(() => {
    dispatch(setOrdersStore({ page }));
  }, [page]);

  const CustomInput = ({ value, onClick }) => (
    <button className={style.customInput} onClick={onClick}>
      {value ? value : `거래일자 선택`}
    </button>
  );

  const handleSearch = (newDate) => {
    const selectDate = newDate ? formatDate(newDate) : date ? formatDate(date) : '';
    let copy = [...orders];
    copy = copy.filter((item) => item.user.displayName.includes(keyword));
    if (selectDate) {
      copy = copy.filter(
        (item) => item.timePaid.slice(0, 10).replace(/-/g, '.') === selectDate.slice(0, 10)
      );
    }
    setSearch(copy);
    setPage(1);
  };

  const handleKeyup = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const handleChange = (event) => {
    setKeyword(event.target.value);
  };

  const handleDatePicker = (newDate) => {
    setDate(newDate);
    handleSearch(newDate);
  };

  const handleReset = () => {
    setKeyword('');
    setDate('');
  };

  return (
    <div>
      <div className={style.searchWrap}>
        <h1>거래 내역 관리</h1>
        <div className={style.search}>
          <div className={style.inputWrap}>
            <input
              className="order-search"
              type="text"
              placeholder="거래자명을 입력해 주세요."
              onKeyUp={handleKeyup}
              onChange={handleChange}
              value={keyword}
            />
            <button className={style.searchBtn} onClick={() => handleSearch()}>
              <BiSearch size="24" color="rgb(95, 0, 128)" title="검색" />
            </button>
          </div>
          <div className={style.datePickerWrap}>
            <DatePicker
              className={style.datePicker}
              selected={date}
              onChange={handleDatePicker}
              dateFormat="yyyy.MM.dd"
              customInput={<CustomInput />}
            />
          </div>
          <button className={style.searchReset} onClick={handleReset}>
            <GrPowerReset color="rgb(95, 0, 128)" size="16" title="초기화" />
          </button>
        </div>
      </div>
      <ul className={style.orderList}>
        <li key="header">
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
      <div className={style.buttons}>
        {Array.isArray(search) ? (
          <Pagination total={search.length} limit={limit} page={page} setPage={setPage} />
        ) : null}
      </div>
    </div>
  );
}
