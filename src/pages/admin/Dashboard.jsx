import React, { useEffect, useState } from 'react';
import { hideLoading, showLoading } from '@/store/loadingSlice';
import { useDispatch } from 'react-redux';
import style from './Dashboard.module.scss';
import * as echarts from 'echarts';
import { getListOrderAdmin, getListProductAdmin } from '@/api/requests';
import { formatPrice } from '@/utils/formats';
import { AiOutlinePieChart, AiFillPieChart } from 'react-icons/ai';
import { GrMoney } from 'react-icons/gr';
import { BsCheckCircle } from 'react-icons/bs';

export default function Dashboard() {
  const dispatch = useDispatch();
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const date = new Date();
  const month = String(date.getMonth() + 1).padStart(2, 0);

  // 데이터 조작이 불가능하여 더미데이터 사용
  const sales = {
    1: 101340000,
    2: 60650000,
    3: 73070000,
    4: 113030000,
    5: 185340000,
    6: 144440000,
    7: 194080000,
    8: 227210000,
    9: 199720000,
    10: 209070000,
    11: 261950000,
    12: 245950000,
  };

  useEffect(() => {
    const chartEl = document.querySelector('#pie-chart');
    const chart = echarts.init(chartEl);
    chart.setOption({
      tooltip: {
        trigger: 'item',
      },
      legend: {
        orient: 'vertical',
        left: 'left',
      },
      series: [
        {
          name: '거래 카테고리',
          type: 'pie',
          radius: '50%',
          data: category,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
      ],
    });
  }, []);

  useEffect(() => {
    const chartEl = document.querySelector('#bar-chart');
    const chart = echarts.init(chartEl);
    chart.setOption({
      tooltip: {
        extraCssText: `
      padding: 8px;
      border-radius: 4px;
      background-color: #FFF;
      color: #FFF;`,
      },
      xAxis: {
        data: Object.keys(sales),
        axisLabel: {
          formatter: (value) => `${value}월`,
        },
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          type: 'bar',
          data: Object.values(sales),
          itemStyle: {
            color: '#9370db',
          },
        },
        {
          type: 'line',
          data: Object.values(sales),
          itemStyle: {
            color: 'blue',
          },
        },
      ],
    });
  }, []);

  useEffect(() => {
    async function getDatas() {
      try {
        dispatch(showLoading());
        const orders = await getListOrderAdmin();
        setOrders(orders);
        const products = await getListProductAdmin();
        setProducts(products);
      } catch {
        alert('데이터 조회에 실패하였습니다.');
      } finally {
        dispatch(hideLoading());
      }
    }
    getDatas();
  }, []);

  useEffect(() => {
    document.querySelector('.monthOrder').innerHTML = orders.filter(
      (item) => item.timePaid.substr(5, 2) === month
    ).length;
    document.querySelector('.monthCancle').innerHTML = orders.filter(
      (item) => item.timePaid.substr(5, 2) === month && item.isCanceled === true
    ).length;
    document.querySelector('.monthDone').innerHTML = orders.filter(
      (item) => item.timePaid.substr(5, 2) === month && item.done === true
    ).length;
    document.querySelector('.monthAmount').innerHTML = formatPrice(
      orders
        .filter((item) => item.timePaid.substr(5, 2) === month && item.isCanceled === false)
        .reduce((acc, cur) => acc + Number(cur.product.price), 0)
    );
    const arr = [];
    const data = orders.map((item) => item.product.tags);
    console.log(data);
    setCategory();
  }, [orders]);

  useEffect(() => {
    document.querySelector('.product').innerHTML = products.length;
    document.querySelector('.soldout').innerHTML = products.filter(
      (item) => item.isSoldOut === true
    ).length;
  }, [products]);

  return (
    <div className={style.dashBoard}>
      <div className={style.row}>
        <div className={style.content}>
          <h1>이번 달 거래 현황</h1>
          <p>
            <AiFillPieChart size="20" />
            거래 수 : <span className="monthOrder"></span> 개
          </p>
          <p>
            <AiOutlinePieChart size="20" />
            거래 취소 수 : <span className="monthCancle"></span> 개
          </p>
          <p>
            <BsCheckCircle size="20" />
            거래 확정 수 : <span className="monthDone"></span> 개
          </p>
          <p>
            <GrMoney size="20" />총 매출 금액 : <span className="monthAmount"></span> 원
          </p>
        </div>
        <div className={style.content}>
          <h1>상품 현황</h1>
          <p>
            <AiFillPieChart size="20" />총 상품 수 : <span className="product"></span> 개
          </p>
          <p>
            <AiOutlinePieChart size="20" />
            품절 상품 수 : <span className="soldout"></span> 개
          </p>
        </div>
      </div>
      <div className={style.row}>
        <div className={style.content}>
          <h1>거래 카테고리 통계</h1>
          <div id="pie-chart" className={style.chart}></div>
        </div>
        <div className={style.content}>
          <h1>거래 금액 통계</h1>
          <div id="bar-chart" className={style.chart}></div>
        </div>
      </div>
    </div>
  );
}
