import { createAction, createReducer, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apiService } from 'api/service';

export const fetchNews = createAsyncThunk('news/fetchNews', async () => {
  const { data } = await apiService.get(`/bank/news/`);
  return data;
});

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    news: [],
    status: 'idle',
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
      .addCase(fetchNews.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.news = action.payload.bankNews;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default newsSlice.reducer;
export const { remove } = newsSlice.actions;
