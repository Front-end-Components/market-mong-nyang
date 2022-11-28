import { createSlice } from '@reduxjs/toolkit';

let stock = createSlice({
  name: 'stock',
  initialState: [10, 11, 12],
  reducers: {
    changeStock(state) {
      return state + 1;
    },
  },
});

export let { changeStock } = stock.actions;

export default stock;
