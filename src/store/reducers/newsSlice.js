import { createAction, createReducer, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apiService } from 'api/service';
import { NewsServices } from 'api/services/NewsServices';
import { getNewsThunk } from './../actions/newsActions';

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
      //getNews
      .addCase(getNewsThunk.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getNewsThunk.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.news = action.payload.bankNews;
      })
      .addCase(getNewsThunk.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default newsSlice.reducer;
export const { remove } = newsSlice.actions;
