import { createSlice } from '@reduxjs/toolkit';

let cart = createSlice({
  name: 'cart',
  initialState: [
    { id: 0, name: 'White and Black', count: 2 },
    { id: 2, name: 'Grey Yordan', count: 1 },
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
