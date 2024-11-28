import { createSlice } from '@reduxjs/toolkit';
import { FETCH_STATUS } from 'constants/fetchStatus';
import { getBankThunk } from 'store/actions/bankActions';

const bankSlice = createSlice({
  name: 'bank',
  initialState: {
    bank: {},
    status: FETCH_STATUS.IDLE,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      //getBank
      .addCase(getBankThunk.pending, (state) => {
        state.status = FETCH_STATUS.LOADING;
      })
      .addCase(getBankThunk.fulfilled, (state, action) => {
        state.status = FETCH_STATUS.SECCEEDED;
        state.bank = action.payload.bank;
      })
      .addCase(getBankThunk.rejected, (state, action) => {
        state.status = FETCH_STATUS.FAILED;
        state.error = action.error.message;
      });
  },
});

export default bankSlice.reducer;
