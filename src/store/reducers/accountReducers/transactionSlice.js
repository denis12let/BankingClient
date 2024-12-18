import { createSlice } from '@reduxjs/toolkit';
import {
  deleteTransactionThunk,
  fetchAllCurrentUserTransactionsThunk,
  fetchCalendarThunk,
  fetchOneTransactionByIdThunk,
} from 'store/actions';

const transactionSlice = createSlice({
  name: 'transaction',
  initialState: {
    transaction: null,
    transactions: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    setTransactions(state, action) {
      state.transactions = state.transactions.filter((item) => item.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      //getTransactions
      .addCase(fetchAllCurrentUserTransactionsThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllCurrentUserTransactionsThunk.fulfilled, (state, action) => {
        state.transactions = action.payload.transactions;
        state.isLoading = false;
      })
      .addCase(fetchAllCurrentUserTransactionsThunk.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      })
      //getTransaction
      .addCase(fetchOneTransactionByIdThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchOneTransactionByIdThunk.fulfilled, (state, action) => {
        state.transaction = action.payload.transaction;
        state.isLoading = false;
      })
      .addCase(fetchOneTransactionByIdThunk.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      })
      //getCalendar
      .addCase(fetchCalendarThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCalendarThunk.fulfilled, (state, action) => {
        state.transactions = action.payload.transactions;
        state.isLoading = false;
      })
      .addCase(fetchCalendarThunk.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      })
      //deleteTransaction
      .addCase(deleteTransactionThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteTransactionThunk.fulfilled, (state, action) => {
        state.transaction = action.payload.transaction;
        state.isLoading = false;
      })
      .addCase(deleteTransactionThunk.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      });
  },
});

export default transactionSlice.reducer;
export const { setTransactions } = transactionSlice.actions;
