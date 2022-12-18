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
        return obj.id === action.payload;
      });
      console.log(num);
      state[num].count += 1;
    },
    decreaseCount(state, action) {
      //state[action.payload].count += 1; // 정렬 시 문제 발생
      let num = state.findIndex((obj) => {
        return obj.id === action.payload;
      });
      console.log(num);
      state[num].count -= 1;
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
      state.splice(num, 1);
    },
    checkedChange(state, action) {
      let num = state.findIndex((obj) => {
        return obj.id === action.payload;
      });
      state[num].checked = !state[num].checked;
    }
  },
});

export let { increaseCount, decreaseCount, insertItem, deleteItem, checkedChange } = cart.actions;

export default cart;
