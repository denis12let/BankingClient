import { combineReducers, configureStore } from '@reduxjs/toolkit';
import newsSlice from './reducers/bankReducers/newsSlice';
import partnersSlice from './reducers/bankReducers/partnersSlice';
import bankSlice from './reducers/bankReducers/bankSlice';
import userSlice from './reducers/userReducers/userSlice';

const reducers = combineReducers({
  news: newsSlice,
  partners: partnersSlice,
  bank: bankSlice,
  user: userSlice,
});

export const store = configureStore({
  reducer: reducers,
});
