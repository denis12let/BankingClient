import { createSlice } from '@reduxjs/toolkit';
import { fetchCurrentUserAccountThunk, updateAccountBalanceThunk } from 'store/actions';

const accountSlice = createSlice({
  name: 'account',
  initialState: {
    balance: null,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      //getBalance
      .addCase(fetchCurrentUserAccountThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCurrentUserAccountThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.balance = action.payload.account.balance;
        state.error = null;
      })
      .addCase(fetchCurrentUserAccountThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || action.error.message;
      })
      //updateBalance
      .addCase(updateAccountBalanceThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateAccountBalanceThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.balance = action.payload.account.balance;
        state.error = null;
      })
      .addCase(updateAccountBalanceThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

export default accountSlice.reducer;
