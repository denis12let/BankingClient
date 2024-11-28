import { createSlice } from '@reduxjs/toolkit';
import { FETCH_STATUS } from 'constants/fetchStatus';
import { getPartnersThunk, getPartnerThunk } from 'store/actions/partnersActions';

const partnersSlice = createSlice({
  name: 'partners',
  initialState: {
    partners: [],
    isLoading: false,
    error: null,
    partner: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      //getPartners
      .addCase(getPartnersThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPartnersThunk.fulfilled, (state, action) => {
        state.partners = action.payload.partners;
        state.isLoading = false;
      })
      .addCase(getPartnersThunk.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      })
      //getPartner
      .addCase(getPartnerThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPartnerThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.partner = action.payload.partner;
      })
      .addCase(getPartnerThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default partnersSlice.reducer;
// export const { resetPartnerStatus } = partnersSlice.actions;
