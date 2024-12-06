import { createSlice } from '@reduxjs/toolkit';
import { fetchAllServicesThunk } from 'store/actions';

const serviceSlice = createSlice({
  name: 'service',
  initialState: {
    services: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      //getServices
      .addCase(fetchAllServicesThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllServicesThunk.fulfilled, (state, action) => {
        state.services = action.payload.services;
        state.isLoading = false;
      })
      .addCase(fetchAllServicesThunk.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      });
  },
});

export default serviceSlice.reducer;
// export const { resetPartnerStatus } = partnersSlice.actions;
