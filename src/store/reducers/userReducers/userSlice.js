import { createSlice } from '@reduxjs/toolkit';
import { fetchCurrentUserThunk, loginUserThunk, registerUserThunk, updateUserThunk } from 'store/actions';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    isLoading: false,
    error: null,
    token: null,
    isAuth: false,
  },
  reducers: {
    setError(state, action) {
      state.error = action.payload;
    },
    setAuthFlag(state, action) {
      state.isAuth = action.payload;
    },
    resetUser(state, action) {
      console.log(1);
      state.user = null;
      state.token = null;
      state.isAuth = false;
    },
  },
  extraReducers: (builder) => {
    builder
      //registration
      .addCase(registerUserThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUserThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.token;
        state.error = null;
      })
      .addCase(registerUserThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || action.error.message;
      })
      //getCurrentUser
      .addCase(fetchCurrentUserThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCurrentUserThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.error = null;
      })
      .addCase(fetchCurrentUserThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || action.error.message;
      })
      //login
      .addCase(loginUserThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUserThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.token;
        state.error = null;
      })
      .addCase(loginUserThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || action.error.message;
      })
      //update
      .addCase(updateUserThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUserThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.token;
        state.error = null;
      })
      .addCase(updateUserThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

export default userSlice.reducer;
export const { setError, setAuthFlag, resetUser } = userSlice.actions;
