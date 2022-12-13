import { configureStore } from '@reduxjs/toolkit';
import cart from './cartSlice.js';
import stock from './stockSlice.js';
import user from './userSlice.js';
import loading from './loadingSlice.js';
import like from './likeSlice.js';

// persist
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';



const persistConfig = {
  key: 'cart',
  storage,
};
const reducers = combineReducers({
  cart : cart,
});
const persistedReducer = persistReducer(persistConfig, reducers);

// Redux store 안에 모든 state 를 넣지 않는 것이 좋음
// 컴포넌트 간 공유가 필요하지 않은 경우 useState() 만 써도 됨

export default configureStore({
  // state 를 여기에 등록해야 사용 가능
  reducer: {
    user: user.reducer,
    stock: stock.reducer,
    cart: cart.reducer,
    loading: loading.reducer,
    like: like.reducer,
    persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});