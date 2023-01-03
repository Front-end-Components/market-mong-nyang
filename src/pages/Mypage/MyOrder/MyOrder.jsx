import React, { useEffect, useState } from 'react';
import style from './MyOrder.module.scss';
import MypageHeader from '@/components/Mypage/MypageHeader';
import { getListOrder } from '@/api/requests';
import Order from '@/components/Mypage/Order/Order';
import { GrPowerReset } from 'react-icons/gr';
import DatePicker from 'react-multi-date-picker';
import InputIcon from "react-multi-date-picker/components/input_icon"
import { formatDate } from '@/utils/formats';
import { useDispatch } from 'react-redux';
import { hideLoading, showLoading } from '@/store/loadingSlice';
import 'react-multi-date-picker/styles/colors/purple.css';
import Pagination from '@/components/common/Pagination';
import { Modal } from '@/components/common/Modal';
import { RiErrorWarningLine } from 'react-icons/ri';

export default function MyOrder() {
  const dispatch = useDispatch();
  const [pageDisplay, setPageDisplay] = useState(true);
  const [modal, setModal] = useState(false);
  const [modalText, setModalText] = useState('');
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
        setModalText('주문내역을 불러오는데 실패하였습니다.');
      } finally {
        dispatch(hideLoading());
      }
    }
    getData();
  }, [page]);

  useEffect(() => {
    if (date === '') {
      handleSearch();
    }
  }, [date]);

  const handleSearch = (newDate) => {
    const selectDate = newDate ? formatDate(newDate) : date ? formatDate(date) : '';
    let copy = [...orders];
    if (selectDate) {
      copy = copy.filter(
        (item) => item.timePaid.slice(0, 10).replace(/-/g, '.') === selectDate.slice(0, 10)
      );
    }
    setSearch(copy);
  };

  search.sort((a, b) => new Date(b.timePaid) - new Date(a.timePaid));

  let countArray = [];
  search.map((item) => {
    if (
      countArray.find((object) => {
        if (
          object.product.title === item.product.title &&
          object.timePaid.substr(0, 10) === item.timePaid.substr(0, 10)
        ) {
          object.cnt++;
          object[object.cnt] = item.detailId;
          return true;
        } else {
          return false;
        }
      })
    ) {
    } else {
      item.cnt = 1;
      item[item.cnt] = item.detailId;
      countArray.push(item);
    }
  });

  const handleDatePicker = (newDate) => {
    setDate(newDate);
    handleSearch(newDate);
  };

  const handleReset = () => {
    setDate('');
  };



  return (
    <div className={style.myOrder}>
      <MypageHeader name={'주문 내역'} />
      {modal ? <Modal modalText={modalText} /> : null}
      <div className={style.datePickerWrap}>
        <DatePicker
          className='purple'
          value={date}
          onChange={handleDatePicker}
          render={<InputIcon />}
        />
      </div>
      <button className={style.searchReset} onClick={handleReset}>
        <GrPowerReset color="#5f0080" size="15" title="초기화" />
      </button>

      {Object.keys(countArray).length > 0 ? (
        countArray.slice(offset, offset + limit).map((item) => {
          return <Order item={item} itmeAll={detail.detailId} key={item.detailId} />;
        })
      ) : (
        <div className={style.noList}>
          <RiErrorWarningLine color="lightgray" size="50" title="닫기" />
          <h4>주문내역이 존재하지 않습니다.</h4>
        </div>
      )}
      <div className={pageDisplay ? style.pagenationNone : style.pagenationBlock}>
        {Array.isArray(countArray) ? (
          <Pagination
            total={Object.keys(countArray).length}
            limit={limit}
            page={page}
            setPage={setPage}
          />
        ) : null}
      </div>
    </div>
  );
}
