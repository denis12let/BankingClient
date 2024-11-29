import { createSlice } from '@reduxjs/toolkit';
import { FETCH_STATUS } from 'constants/fetchStatus';
import { getBankThunk } from 'store/actions/bankActions/bankActions';

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
      .addCase(getBankThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBankThunk.fulfilled, (state, action) => {
        state.bank = action.payload.bank;
        state.isLoading = false;
      })
      .addCase(getBankThunk.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      });
  },
});

export default bankSlice.reducer;
