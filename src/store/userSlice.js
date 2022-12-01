import { createSlice } from '@reduxjs/toolkit';

// state 하나를 slice 라고 부름
let user = createSlice({
  name: 'user',
  initialState: { accessToken: '', isAdmin: false },
  reducers: {
    // state 수정해주는 함수
    changeName(state) {
      // object, array 는 return 없이 직접 수정 가능
      // state.name = 'lee';
    },
    increase(state) {
      // state.age += 1;
    },
    // state 변경 함수에 파라미터 전달받기
    increaseNum(state, action) {
      // state.age += action.payload; // payload : 전달한 것 (화물)
    },
  },
});

// state 변경함수들(reducers)이 object 로 꺼내어짐
export let { changeName, increase, increaseNum } = user.actions;

export default user;
