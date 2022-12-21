import { createSlice } from '@reduxjs/toolkit';

let products = createSlice({
  name: 'products',
  initialState: { data: [], page: 0, isUpdate: false },
  reducers: {
    setProductsStore(state, action) {
      return Object.assign(state, action.payload);
    },
    initProductsStore() {
      return { data: [], page: 0 };
    },
    isProductsUpdate(state, action) {
      state.isUpdate = action.payload;
    },
  },
});

export const { setProductsStore, initProductsStore, isProductsUpdate } = products.actions;

export default products;
