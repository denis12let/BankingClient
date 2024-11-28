import { combineReducers, configureStore } from '@reduxjs/toolkit';
import newsSlice from './reducers/newsSlice';
import partnersSlice from './reducers/partnersSlice';
import bankSlice from './reducers/bankSlice';
import userSlice from './reducers/userSlice';

const reducers = combineReducers({
  news: newsSlice,
  partners: partnersSlice,
  bank: bankSlice,
  user: userSlice,
});

export const store = configureStore({
  reducer: reducers,
});
