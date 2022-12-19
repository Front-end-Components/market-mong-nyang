import { createSlice } from "@reduxjs/toolkit";

// state 하나를 slice 라고 부름
let user = createSlice({
  name: "user",
  initialState: {
    displayName: "",
    email: "",
    profileImg: "",
  },
  reducers: {
    setUserInfo(state, action) {
      state.displayName = action.payload.displayName;
      state.email = action.payload.email;
      state.profileImg = action.payload.profileImg;
    },
    setUserInit(state) {
      state.displayName = "";
      state.email = "";
      state.profileImg = null;
    },
  },
});

// state 변경함수들(reducers)이 object 로 꺼내어짐
export const { setUserInfo, setUserInit } = user.actions;

export default user;
