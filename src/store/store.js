import { configureStore } from '@reduxjs/toolkit';
import cart from './cartSlice.js';
import user from './userSlice.js';
import loading from './loadingSlice.js';
import like from './likeSlice.js';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'root',
  version: 1,
  storage, // 저장 공간
  whitelist: ['cart', 'like'], // 유지하고 싶은 값
  blacklist: ['loading'], // 유지하지 않을 내용
};

const reducer = combineReducers({
  cart: cart.reducer,
  user: user.reducer,
  loading: loading.reducer,
  like: like.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

// Redux store 안에 모든 state 를 넣지 않는 것이 좋음
// 컴포넌트 간 공유가 필요하지 않은 경우 useState() 만 써도 됨
const store = configureStore({
  // state 를 여기에 등록해야 사용 가능
  reducer: persistedReducer,
});

export default store;
