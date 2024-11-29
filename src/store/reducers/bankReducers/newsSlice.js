import { createSlice } from '@reduxjs/toolkit';
import { getNewsThunk } from 'store/actions/bankActions/newsActions';

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    news: [],
    isLoading: false,
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
        state.isLoading = true;
      })
      .addCase(getNewsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.news = action.payload.bankNews;
      })
      .addCase(getNewsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default newsSlice.reducer;
export const { remove } = newsSlice.actions;
