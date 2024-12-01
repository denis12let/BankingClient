import { createSlice } from '@reduxjs/toolkit';
import { fetchAllPartnersThunk, fetchOnePartnerByIdThunk } from 'store/actions';

const partnerSlice = createSlice({
  name: 'partner',
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
      .addCase(fetchAllPartnersThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllPartnersThunk.fulfilled, (state, action) => {
        state.partners = action.payload.partners;
        state.isLoading = false;
      })
      .addCase(fetchAllPartnersThunk.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      })
      //getPartner
      .addCase(fetchOnePartnerByIdThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchOnePartnerByIdThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.partner = action.payload.partner;
      })
      .addCase(fetchOnePartnerByIdThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

export default partnerSlice.reducer;
// export const { resetPartnerStatus } = partnersSlice.actions;
