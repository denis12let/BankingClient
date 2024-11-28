import { createSlice } from '@reduxjs/toolkit';
import { FETCH_STATUS } from 'constants/fetchStatus';
import { getBankThunk } from 'store/actions/bankActions';

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
        state.status = FETCH_STATUS.LOADING;
        state.isLoading = true;
      })
      .addCase(getBankThunk.fulfilled, (state, action) => {
        state.status = FETCH_STATUS.SECCEEDED;
        state.bank = action.payload.bank;
        state.isLoading = false;
      })
      .addCase(getBankThunk.rejected, (state, action) => {
        state.status = FETCH_STATUS.FAILED;
        state.error = action.error.message;
        state.isLoading = false;
      });
  },
});

export default bankSlice.reducer;
