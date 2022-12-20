import { createSlice } from '@reduxjs/toolkit';

let like = createSlice({
  name: 'like',
  initialState: [],
  reducers: {
    insertLike(state, action) {
      let num = state.findIndex((el) => {
        return el.id === action.payload.id;
      });
      if (num === -1) {
        state.push(action.payload)
      } else {
        state[num].count += action.payload.count;
      }
    },
    deleteLike(state, action) {
      let num = state.findIndex((el) => {
        return el.id === action.payload;
      });
      state.splice(num, 1);
    },
  },
});

export let { insertLike, deleteLike } = like.actions;
export default like;