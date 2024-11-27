import { createSlice } from '@reduxjs/toolkit';
import { FETCH_STATUS } from 'constants/fetchStatus';
import { getPartnersThunk } from 'store/actions/partnersActions';

const partnersSlice = createSlice({
  name: 'partners',
  initialState: {
    partners: [],
    status: FETCH_STATUS.IDLE,
    error: null,
    partner: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      //getPartners
      .addCase(getPartnersThunk.pending, (state) => {
        state.status = FETCH_STATUS.LOADING;
      })
      .addCase(getPartnersThunk.fulfilled, (state, action) => {
        state.status = FETCH_STATUS.SECCEEDED;
        state.partners = action.payload.partners;
      })
      .addCase(getPartnersThunk.rejected, (state, action) => {
        state.status = FETCH_STATUS.FAILED;
        state.error = action.error.message;
      });
  },
});

export default partnersSlice.reducer;
export const {} = partnersSlice.actions;
