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
import { useDispatch } from 'react-redux';
import { hideLoading, showLoading } from '@/store/loadingSlice';


export default function MyOrder() {
  const dispatch = useDispatch;
  const [date, setDate] = useState();
  const [search, setSearch] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        dispatch(showLoading());
        const data = await getListOrder();
        setSearch(data);
        setOrders(data);
      } catch {
        alert('구매하신 상품이 없습니다.');
      } finally {
        dispatch(hideLoading());
      }
      
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
    setDate();
    handleSearch();
  };
  
  return (
    <div className={style.myOrder}>
    <MypageHeader name={'주문 내역'} />

    <div className={style.datePickerWrap}>
      <DatePicker className={style.datePicker} selected={date} onChange={handleDatePicker} dateFormat='yyyy.MM.dd' customInput={<CustomInput />} />
    </div>
    <button className={style.searchReset} onClick={handleReset}>
      <GrPowerReset color='rgb(95, 0, 128)' size='13' title='초기화' />
    </button>

    {Array.isArray(countArray) ? (
    countArray.map((item) => {
      return <Order item={item} />;
    })
  ) : (
    <p>구매하신 상품이 없습니다.</p>
  )}
    </div>
  );
}

