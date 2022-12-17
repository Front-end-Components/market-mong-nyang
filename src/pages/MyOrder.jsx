import React, { useEffect, useState } from 'react';
import style from './MyOrder.module.scss';
import styleDate from '@/pages/admin/Orders.module.scss';
import MypageHeader from '../components/MypageHeader';
import { getListOrder } from '@/api/requests';
import Order from '@/components/Order';
import { GrPowerReset } from 'react-icons/gr';
import DatePicker from 'react-datepicker';
import { formatDate } from '@/utils/formats';
import 'react-datepicker/dist/react-datepicker.css';


export default function MyOrder() {
  const [details, setDetails] = useState([]);
  const [date, setDate] = useState();
  const [search, setSearch] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function getData() {
      const data = await getListOrder();
      setDetails(data);
      setSearch(data);
      setOrders(data);
    }
    getData();
  }, []);

  const CustomInput = ({ value, onClick }) => (
    <button className={styleDate.customInput} onClick={onClick}>
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

  const handleDatePicker = (newDate) => {
    setDate(newDate);
    handleSearch(newDate);
  };

  const handleReset = () => {
    setDate();
    handleSearch();
  };
  
  return (
    <div className={style.myOrder}>
    <MypageHeader name={'주문 내역 (썸네일 -> null)'} />

    <div className={styleDate.datePickerWrap}>
      <DatePicker className={styleDate.datePicker} selected={date} onChange={handleDatePicker} dateFormat='yyyy.MM.dd' customInput={<CustomInput />} />
    </div>
    <button className={styleDate.searchReset} onClick={handleReset}>
      <GrPowerReset color='rgb(95, 0, 128)' size='15' title='초기화' />
    </button>

    {Array.isArray(search) ? (
    search.map((item) => {
      return <Order item={item} />;
    })
  ) : (
    <p>구매하신 상품이 없습니다.</p>
  )}
    </div>
  );
}

