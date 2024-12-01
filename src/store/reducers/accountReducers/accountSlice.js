import { createSlice } from '@reduxjs/toolkit';
import { fetchCurrentUserAccountThunk } from 'store/actions';

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
      });
  },
});

export default accountSlice.reducer;
