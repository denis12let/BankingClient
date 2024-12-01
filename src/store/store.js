import { combineReducers, configureStore } from '@reduxjs/toolkit';
import newsSlice from './reducers/bankReducers/newsSlice';
import partnerSlice from './reducers/bankReducers/partnersSlice';
import bankSlice from './reducers/bankReducers/bankSlice';
import serviceSlice from './reducers/bankReducers/serviceSlice';
import userSlice from './reducers/userReducers/userSlice';
import cardSlice from './reducers/accountReducers/cardSlice';
import accountSlice from './reducers/accountReducers/accountSlice';

const reducers = combineReducers({
  account: accountSlice,
  card: cardSlice,

  news: newsSlice,
  partner: partnerSlice,
  bank: bankSlice,
  service: serviceSlice,

  user: userSlice,
});

export const store = configureStore({
  reducer: reducers,
});
