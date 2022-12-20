import React, { useEffect, useState } from 'react';
import style from './MyOrder.module.scss';
import MypageHeader from '../components/MypageHeader';
import { getListOrder } from '@/api/requests';
import Order from '@/components/Order';
import { GrPowerReset } from 'react-icons/gr';
import DatePicker from "react-multi-date-picker"
import { formatDate } from '@/utils/formats';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch } from 'react-redux';
import { hideLoading, showLoading } from '@/store/loadingSlice';
import "react-multi-date-picker/styles/colors/purple.css";
import Pagination from '@/components/Pagination';
import MyOrderModal from '@/components/myOrderModal';

export default function MyOrder() {
  const dispatch = useDispatch();
  const [pageDisplay, setPageDisplay] = useState(true);
  const [modal, setModal] = useState(false);
  const [detail, setDetail] = useState([]);
  const [date, setDate] = useState();
  const [search, setSearch] = useState([]);
  const [orders, setOrders] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 10;
  const offset = (page - 1) * limit;


  useEffect(() => {
    async function getData() {
      try {
        dispatch(showLoading());
        const data = await getListOrder();
        setDetail(data);
        setSearch(data);
        setOrders(data);
        setPageDisplay(false);
      } catch {
        setModal(true);
      } finally {
        
        dispatch(hideLoading());
      }
    }
    getData();
  }, []);

  const CustomInput = ({ value, onClick }) => (
    <button className={style.customInput} onClick={onClick}>
      {value ? value : `거래일자 선택`}
    </button>
  );

  const handleSearch = (newDate) => {
    const selectDate = newDate ? formatDate(newDate) : date ? formatDate(date) : '';
    let copy = [...orders];
    if (selectDate) {
      copy = copy.filter((item) => item.timePaid.slice(0, 10).replace(/-/g, '.') === selectDate.slice(0, 10));
    }
    setSearch(copy);
    
  };

  search.sort((a, b) => new Date(b.timePaid) - new Date(a.timePaid));

  let countArray = [];
  search.map(item => {
    if(countArray.find(object => {
      if(object.product.title === item.product.title && object.timePaid.substr(0, 10) === item.timePaid.substr(0, 10)) {
        object.cnt++;
        return true;
      } else {
        return false;
      }
    })) {
    } else {
      item.cnt = 1;
      countArray.push(item);
    }
  })


  const handleDatePicker = (newDate) => {
    setDate(newDate);
    handleSearch(newDate);
  };

  const handleReset = () => {
    setDate('');
  };

  useEffect(() => {
    if (date === '') {
      handleSearch();
    }
  }, [date]);

  return (
    <div className={style.myOrder}>
    <MypageHeader name={'주문 내역'} />
    {
        modal ? <MyOrderModal modal={modal} setModal={setModal} /> : null
      }
    <div className={style.datePickerWrap}>
      <DatePicker className='purple' selected={date} onChange={handleDatePicker} dateFormat='yyyy.MM.dd' customInput={<CustomInput />} />
    </div>
    <button className={style.searchReset} onClick={handleReset}>
      <GrPowerReset color='#5f0080' size='15' title='초기화' />
    </button>

    {Array.isArray(countArray) ? (
    countArray.slice(offset, offset + limit).map((item) => {
      return <Order item={item} />;
    })
  ) : (
    <p>구매하신 상품이 없습니다.</p>
  )} 
  <div className={pageDisplay ? style.pagenationNone : style.pagenationBlock}>
        {Array.isArray(countArray) ? (
          <Pagination total={countArray.length} limit={limit} page={page} setPage={setPage} />
        ) : null}
      </div>
    </div>
  );
}

