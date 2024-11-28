import { combineReducers, configureStore } from '@reduxjs/toolkit';
import newsSlice from './reducers/newsSlice';
import partnersSlice from './reducers/partnersSlice';
import bankSlice from './reducers/bankSlice';

const reducers = combineReducers({
  news: newsSlice,
  partners: partnersSlice,
  bank: bankSlice,
});

export const store = configureStore({
  reducer: reducers,
});
