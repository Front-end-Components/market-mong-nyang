import { createSlice } from '@reduxjs/toolkit';

let products = createSlice({
  name: 'products',
  initialState: { data: [], page: 0, soldout: false, category: '', input: '' },
  reducers: {
    setProductsStore(state, action) {
      return Object.assign(state, action.payload);
    },
    initProductsStore(state) {
      return { data: [], page: 0, soldout: false, category: '', input: '' };
    },
  },
});

export const { setProductsStore, initProductsStore } = products.actions;

export default products;
