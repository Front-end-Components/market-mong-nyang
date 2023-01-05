import { createSlice } from '@reduxjs/toolkit';

let orders = createSlice({
  name: 'orders',
  initialState: { data: [], page: 0, isUpdate: false },
  reducers: {
    setOrdersStore(state, action) {
      return Object.assign(state, action.payload);
    },
    initOrderStore() {
      return { data: [], page: 0 };
    },
    isOrderUpdate(state, action) {
      state.isUpdate = action.payload;
    },
  },
});

export const { setOrdersStore, initOrderStore, isOrderUpdate } = orders.actions;

export default orders;
