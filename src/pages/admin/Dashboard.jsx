import React, { useEffect } from 'react';
import style from './Dashboard.module.scss';
import * as echarts from 'echarts';

export default function Dashboard() {
  const sales = { 1: 13350000, 2: 40650000, 3: 53070000, 4: 90030000, 5: 105340000, 6: 124440000, 7: 144080000, 8: 157210000, 9: 199720000, 10: 229070000, 11: 251950000, 12: 285950000 };

  useEffect(() => {
    const chartEl = document.querySelector('#pie-chart');
    const chart = echarts.init(chartEl);
    chart.setOption({
      title: {
        text: 'Referer of a Website',
        subtext: 'Fake Data',
        left: 'center',
      },
      tooltip: {
        trigger: 'item',
      },
      legend: {
        orient: 'vertical',
        left: 'left',
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' },
          ],
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

  return (
    <div className={style.dashBoard}>
      <div className={style.header}>
        <h1>거래상품 현황</h1>
      </div>
      <div id='pie-chart' className={style.chart}></div>
      <div className={style.header}>
        <h1>월별 거래금액 현황</h1>
      </div>
      <div id='bar-chart' className={style.chart}></div>
    </div>
  );
}
