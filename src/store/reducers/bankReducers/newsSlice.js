import { createSlice } from '@reduxjs/toolkit';
import { fetchAllNewsThunk } from 'store/actions';

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
      .addCase(fetchAllNewsThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllNewsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.news = action.payload.bankNews;
      })
      .addCase(fetchAllNewsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default newsSlice.reducer;
export const { remove } = newsSlice.actions;
