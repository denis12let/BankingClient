import { combineReducers, configureStore } from '@reduxjs/toolkit';
import newsSlice from './reducers/bankReducers/newsSlice';
import partnerSlice from './reducers/bankReducers/partnersSlice';
import bankSlice from './reducers/bankReducers/bankSlice';
import serviceSlice from './reducers/bankReducers/serviceSlice';
import userSlice from './reducers/userReducers/userSlice';
import cardSlice from './reducers/accountReducers/cardSlice';
import accountSlice from './reducers/accountReducers/accountSlice';
import transactionSlice from './reducers/accountReducers/transactionSlice';
import basketSlice from './reducers/accountReducers/basketSlice';

const reducers = combineReducers({
  account: accountSlice,
  card: cardSlice,
  transaction: transactionSlice,
  basket: basketSlice,

  news: newsSlice,
  partner: partnerSlice,
  bank: bankSlice,
  service: serviceSlice,

  user: userSlice,
});

export const store = configureStore({
  reducer: reducers,
});
