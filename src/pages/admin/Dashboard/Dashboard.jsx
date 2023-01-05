import React, { useEffect, useState } from 'react';
import { hideLoading, showLoading } from '@/store/loadingSlice';
import { useDispatch, useSelector } from 'react-redux';
import style from './Dashboard.module.scss';
import * as echarts from 'echarts';
import { getListOrderAdmin, getListProductAdmin } from '@/api/requests';
import { formatPrice } from '@/utils/formats';
import { AiOutlinePieChart, AiFillPieChart } from 'react-icons/ai';
import { GrMoney } from 'react-icons/gr';
import { BsCheckCircle } from 'react-icons/bs';
import { setOrdersStore } from '@/store/adminOrdersSlice';
import { setProductsStore } from '@/store/adminProductsSlice';
import { useRef } from 'react';

export default function Dashboard() {
  const dispatch = useDispatch();
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [sales, setSales] = useState({});
  const [productCnt, setProductCnt] = useState(0);
  const [soldOutCnt, setSoldOutCnt] = useState(0);
  const [monthOrder, setMonthOrder] = useState(0);
  const [monthCancel, setMonthCancel] = useState(0);
  const [monthDone, setMonthDone] = useState(0);
  const [monthAmount, setMonthAmount] = useState(0);

  const pieChartRef = useRef();
  const barChartRef = useRef();

  const date = new Date();
  const year = String(date.getFullYear());
  const month = String(date.getMonth() + 1).padStart(2, 0);
  const today = String(date.getDate()).padStart(2, 0);

  let storedOrders = useSelector((state) => {
    return state.orders.data;
  });
  let storedProducts = useSelector((state) => {
    return state.products.data;
  });

  useEffect(() => {
    if (category.length > 0) {
      const chartEl = pieChartRef.current;
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
    }
  }, [category]);

  useEffect(() => {
    if (Object.keys(sales).length > 0) {
      const chartEl = barChartRef.current;
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
            name: '거래 금액',
            type: 'bar',
            data: Object.values(sales),
            itemStyle: {
              color: '#ffd966',
            },
          },
          {
            type: 'line',
            data: Object.values(sales),
            itemStyle: {
              color: '#F71A5B',
            },
          },
        ],
      });
    }
  }, [sales]);

  useEffect(() => {
    dispatch(setOrdersStore({ page: 0 }));
    dispatch(setProductsStore({ page: 0 }));
    if (storedOrders.length === 0 && storedProducts.length === 0) {
      async function getDatas() {
        try {
          dispatch(showLoading());
          let orders = await getListOrderAdmin();
          setOrders(orders);
          orders = orders.sort((a, b) => new Date(b.timePaid) - new Date(a.timePaid));
          dispatch(setOrdersStore({ data: orders }));
          const products = await getListProductAdmin();
          setProducts(products);
          dispatch(setProductsStore({ data: products }));
        } catch {
          alert('데이터 조회에 실패하였습니다.');
        } finally {
          dispatch(hideLoading());
        }
      }
      getDatas();
    } else {
      dispatch(showLoading());
      setOrders(storedOrders);
      setProducts(storedProducts);
      dispatch(hideLoading());
    }
  }, []);

  useEffect(() => {
    setMonthOrder(orders.filter((item) => item.timePaid.substr(5, 2) === month).length);
    setMonthCancel(
      orders.filter((item) => item.timePaid.substr(5, 2) === month && item.isCanceled === true)
        .length
    );
    setMonthDone(
      orders.filter((item) => item.timePaid.substr(5, 2) === month && item.done === true).length
    );
    setMonthAmount(
      formatPrice(
        orders
          .filter((item) => item.timePaid.substr(5, 2) === month && item.isCanceled === false)
          .reduce((acc, cur) => acc + Number(cur.product.price), 0)
      )
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
            String(new Date(item.timePaid)).substring(0, 15) ===
            String(new Date(date.setDate(today - i))).substring(0, 15)
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
    setProductCnt(products.length);
    setSoldOutCnt(products.filter((item) => item.isSoldOut === true).length);
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
              <span>{monthOrder}</span> 개
            </p>
          </div>
          <div className={style.card}>
            <h2>
              <AiOutlinePieChart size="20" />
              거래 취소 수
            </h2>
            <p>
              <span>{monthCancel}</span> 개
            </p>
          </div>
          <div className={style.card}>
            <h2>
              <BsCheckCircle size="20" />
              거래 확정 수
            </h2>
            <p>
              <span>{monthDone}</span> 개
            </p>
          </div>
          <div className={style.card}>
            <h2>
              <GrMoney size="20" />총 매출 금액
            </h2>
            <p>
              <span>{monthAmount}</span> 원
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
              <span className="product">{productCnt}</span> 개
            </p>
          </div>
          <div className={style.card}>
            <h2>
              <AiOutlinePieChart size="20" />
              품절 상품 수
            </h2>
            <p>
              <span className="soldout">{soldOutCnt}</span> 개
            </p>
          </div>
        </div>
      </div>
      <div className={style.row}>
        <div className={style.content}>
          <h1>거래 카테고리 통계</h1>
          <div className={style.chart} ref={pieChartRef}></div>
        </div>
        <div className={style.content}>
          <h1>이번 주 거래 금액 통계</h1>
          <div className={style.chart} ref={barChartRef}></div>
        </div>
      </div>
    </div>
  );
}
