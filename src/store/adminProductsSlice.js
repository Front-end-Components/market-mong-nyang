import { createSlice } from '@reduxjs/toolkit';

let products = createSlice({
  name: 'products',
  initialState: {
    data: [],
    page: 0,
    isUpdate: false,
    category: '',
    isSoldout: '',
    keyword: '',
  },
  reducers: {
    setProductsStore(state, action) {
      return Object.assign(state, action.payload);
    },
    initProductsStore() {
      return { data: [], page: 0, isUpdate: false, category: '', isSoldout: '', keyword: '' };
    },
    isProductsUpdate(state, action) {
      state.isUpdate = action.payload;
    },
  },
});

export const { setProductsStore, initProductsStore, isProductsUpdate } = products.actions;

export default products;
