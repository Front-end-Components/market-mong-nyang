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
  const [sales, setSales] = useState({});
  const date = new Date();
  const year = String(date.getFullYear());
  const month = String(date.getMonth() + 1).padStart(2, 0);
  const today = String(date.getDate()).padStart(2, 0);

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
          radius: '80%',
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
  }, [category]);

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
          formatter: (value) => `${value} 일`,
        },
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          name: '이번 주 거래 금액',
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
  }, [sales]);

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

    const map = new Map();
    orders
      .map((item) => item.product.tags)
      .forEach((item) => {
        map.set(item, (map.get(item) || 0) + 1);
      });
    const arr = [];
    for (let [key, val] of map) {
      arr.push({ value: val, name: key });
    }
    setCategory(arr);

    let dateAmount = [];
    for (let i = 0; i < 7; i++) {
      dateAmount.push(
        orders.filter(
          (item) =>
            item.timePaid.substr(0, 4) === String(year) &&
            item.timePaid.substr(5, 2) === String(month) &&
            item.timePaid.substr(8, 2) === String(today - i)
        )
      );
    }
    dateAmount = dateAmount.map((arr) => arr.map((el) => el.product.price));
    dateAmount = dateAmount.map((arr) => arr.reduce((acc, cur) => acc + cur, 0));
    const weekAmount = {};
    for (let i = 0; i < 7; i++) {
      weekAmount[new Date(date.setDate(today - i)).getDate()] = dateAmount[i];
    }
    setSales(weekAmount);
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
          <div className={style.card}>
            <h2>
              <AiFillPieChart size="20" />
              거래 수
            </h2>
            <p>
              <span className="monthOrder"></span> 개
            </p>
          </div>
          <div className={style.card}>
            <h2>
              <AiOutlinePieChart size="20" />
              거래 취소 수
            </h2>
            <p>
              <span className="monthCancle"></span> 개
            </p>
          </div>
          <div className={style.card}>
            <h2>
              <BsCheckCircle size="20" />
              거래 확정 수
            </h2>
            <p>
              <span className="monthDone"></span> 개
            </p>
          </div>
          <div className={style.card}>
            <h2>
              <GrMoney size="20" />총 매출 금액
            </h2>
            <p>
              <span className="monthAmount"></span> 원
            </p>
          </div>
        </div>
        <div className={style.content}>
          <h1>현재 상품 현황</h1>
          <div className={style.card}>
            <h2>
              <AiFillPieChart size="20" />총 상품 수
            </h2>
            <p>
              <span className="product"></span> 개
            </p>
          </div>
          <div className={style.card}>
            <h2>
              <AiOutlinePieChart size="20" />
              품절 상품 수
            </h2>
            <p>
              <span className="soldout"></span> 개
            </p>
          </div>
        </div>
      </div>
      <div className={style.row}>
        <div className={style.content}>
          <h1>거래 카테고리 통계</h1>
          <div id="pie-chart" className={style.chart}></div>
        </div>
        <div className={style.content}>
          <h1>이번 주 거래 금액 통계</h1>
          <div id="bar-chart" className={style.chart}></div>
        </div>
      </div>
    </div>
  );
}
