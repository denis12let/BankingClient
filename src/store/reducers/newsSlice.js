import { createSlice } from '@reduxjs/toolkit';
import { FETCH_STATUS } from 'constants/fetchStatus';
import { getNewsThunk } from 'store/actions/newsActions';

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    news: [],
    status: FETCH_STATUS.IDLE,
    error: null,
  },
  reducers: {
    remove(state, action) {
      const idToDelete = action.payload;
      state.news = state.news.filter((item) => item.id !== idToDelete);
    },
  },
  extraReducers: (builder) => {
    builder
      //getNews
      .addCase(getNewsThunk.pending, (state) => {
        state.status = FETCH_STATUS.LOADING;
      })
      .addCase(getNewsThunk.fulfilled, (state, action) => {
        state.status = FETCH_STATUS.SECCEEDED;
        state.news = action.payload.bankNews;
      })
      .addCase(getNewsThunk.rejected, (state, action) => {
        state.status = FETCH_STATUS.FAILED;
        state.error = action.error.message;
      });
  },
});

export default newsSlice.reducer;
export const { remove } = newsSlice.actions;
