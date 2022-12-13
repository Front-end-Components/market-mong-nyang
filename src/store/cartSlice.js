import {
  createSlice
} from '@reduxjs/toolkit';

let cart = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    increaseCount(state, action) {
      //state[action.payload].count += 1; // 정렬 시 문제 발생
      let num = state.findIndex((obj) => {
        return obj.title === action.payload.title;
      });
      state[num].count += 1;
    },
    insertItem(state, action) {
      let num = state.findIndex((obj) => {
        return obj.id === action.payload.id;
      });
      if (num === -1) {
        state.push(action.payload);
      } else {
        state[num].count += action.payload.count;
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
