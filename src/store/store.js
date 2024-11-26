import { combineReducers, configureStore } from '@reduxjs/toolkit';
import newsSlice from './reducers/newsSlice';

const reducers = combineReducers({
  news: newsSlice,
});

export const store = configureStore({
  reducer: reducers,
});
