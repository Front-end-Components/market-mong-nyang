import { createSlice } from '@reduxjs/toolkit';

let orders = createSlice({
  name: 'orders',
  initialState: { data: [], page: 0, input: '', data: '' },
  reducers: {
    setOrdersStore(state, action) {
      return Object.assign(state, action.payload);
    },
    initOrderStore(state) {
      return { data: [], page: 0, input: '', data: '' };
    },
  },
});

export const { setOrdersStore, initOrderStore } = orders.actions;

export default orders;
