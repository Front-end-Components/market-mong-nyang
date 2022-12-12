import { createSlice } from '@reduxjs/toolkit';

let loading = createSlice({
  name: 'loading',
  initialState: { isLoading: false },
  reducers: {
    showLoading(state) {
      state.isLoading = true;
    },
    hideLoading(state) {
      state.isLoading = false;
    },
  },
});

export let { showLoading, hideLoading } = loading.actions;

export default loading;
