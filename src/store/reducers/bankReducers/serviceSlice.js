import { createSlice } from '@reduxjs/toolkit';
import { createServiceThunk, fetchAllServicesThunk } from 'store/actions';

const serviceSlice = createSlice({
  name: 'service',
  initialState: {
    services: [],
    isLoading: false,
    error: null,
    service: null,
  },
  reducers: {
    removeService(state, action) {
      const idToDelete = action.payload;
      state.services = state.services.filter((item) => item.id !== idToDelete);
    },
  },
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
      })
      //createServices
      .addCase(createServiceThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createServiceThunk.fulfilled, (state, action) => {
        state.service = action.payload.service;
        state.isLoading = false;
      })
      .addCase(createServiceThunk.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      });
  },
});

export default serviceSlice.reducer;
export const { removeService } = serviceSlice.actions;
