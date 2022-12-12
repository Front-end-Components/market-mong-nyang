import { createSlice } from '@reduxjs/toolkit';

let cart = createSlice({
  name: 'cart',
  initialState: [
    {
      id: 'cFmeC7aY5KjZbBAdJE9y',
      title: '삼성전자 스마트모니터 M7 S43AM700',
      count: 2,
      price: 639000,
      description: '107.9cm(43인치) / 와이드(16:9) / 평면 / VA / 3840 x 2160(4K UHD) / 픽셀피치: 0.2451mm / 8ms(GTG) / 300cd / 5,00',
      tags: ['가전', '모니터', '컴퓨터'],
      thumbnail: 'https://cdn-pro-web-241-106-godomall.spdycdn.net/bienbien3_godomall_com/data/goods/22/10/42/1000000489/1000000489_main_062.jpg',
    },
    {
      id: 'nbqtQvEivYwEXTDet7YM',
      title: 'MacBook Pro 16',
      count: 1,
      price: 3360000,
      description: '역대 가장 강력한 MacBook Pro가 등장했습니다. 최초의 프로용 Apple Silicon인 M1 Pro 또는 M1 Max 칩을 탑재해 쏜살같이 빠른 속도는 물론, 획기적인 성',
      tags: ['가전', '노트북', '컴퓨터'],
      thumbnail: 'https://cdn-pro-web-241-106-godomall.spdycdn.net/bienbien3_godomall_com/data/goods/22/10/42/1000000490/1000000490_main_098.jpg',
    },
  ],
  reducers: {
    increaseCount(state, action) {
      //state[action.payload].count += 1; // 정렬 시 문제 발생
      let num = state.findIndex((obj) => {
        return obj.id === action.payload;
      });
      state[num].count += 1;
    },
    insertItem(state, action) {
      let num = state.findIndex((obj) => {
        return obj.id === action.payload.id;
      });
      if (num === -1) {
        state.push({ id: action.payload.id, name: action.payload.title, count: 1 });
      } else {
        state[num].count += 1;
      }
    },
    deleteItem(state, action) {
      let num = state.findIndex((obj) => {
        return obj.id === action.payload;
      });
      if (state[num].count === 1) {
        state.splice(num, 1);
      } else {
        state[num].count -= 1;
      }
    },
  },
});

export let { increaseCount, insertItem, deleteItem } = cart.actions;

export default cart;
