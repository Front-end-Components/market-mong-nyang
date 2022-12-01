import { createSlice } from '@reduxjs/toolkit';

let loading = createSlice({
  name: 'loading',
  initialState: true,
  // initialState: false,
  reducers: {
    showLoading() {
      return true;
    },
    hideLoading() {
      return false;
    },
  },
});

export let { toggleLoading } = loading.actions;

export default loading;
