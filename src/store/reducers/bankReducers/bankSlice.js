import { createSlice } from '@reduxjs/toolkit';
import { fetchBankThunk } from 'store/actions';

const bankSlice = createSlice({
  name: 'bank',
  initialState: {
    bank: null,
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      //getBank
      .addCase(fetchBankThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBankThunk.fulfilled, (state, action) => {
        state.bank = action.payload.bank;
        state.isLoading = false;
      })
      .addCase(fetchBankThunk.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      });
  },
});

export default bankSlice.reducer;
