import { combineReducers, configureStore } from '@reduxjs/toolkit';
import newsSlice from './reducers/newsSlice';
import partnersSlice from './reducers/partnersSlice';

const reducers = combineReducers({
  news: newsSlice,
  partners: partnersSlice,
});

export const store = configureStore({
  reducer: reducers,
});
