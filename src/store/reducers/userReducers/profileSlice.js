import { createSlice } from '@reduxjs/toolkit';
import { createProfileThunk, fetchCurrentProfileThunk } from 'store/actions';

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    profile: null,
    isLoading: false,
    error: null,
    isProfile: false,
  },
  reducers: {
    setProfileFlag(state, action) {
      state.isProfile = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      //registration
      .addCase(createProfileThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createProfileThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.profile = action.payload.profile;
        state.error = null;
      })
      .addCase(createProfileThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || action.error.message;
      })
      //getProfile
      .addCase(fetchCurrentProfileThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCurrentProfileThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.profile = action.payload.profile;
        state.error = null;
      })
      .addCase(fetchCurrentProfileThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

export default profileSlice.reducer;
export const { setProfileFlag } = profileSlice.actions;
