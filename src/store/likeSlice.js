import { createSlice } from '@reduxjs/toolkit';

let like = createSlice({
  name: 'like',
  initialState: [],
  reducers: {
    insertLike(state, action) {
      let num = state.findIndex((el) => {
        return el === action.payload;
      });
      if (num === -1) state.push(action.payload);
    },
    deleteLike(state, action) {
      let num = state.findIndex((el) => {
        return el === action.payload;
      });
      if (state[num].count === 1) state.splice(num, 1);
    },
  },
});

export let { insertLike, deleteLike } = like.actions;

export default like;
