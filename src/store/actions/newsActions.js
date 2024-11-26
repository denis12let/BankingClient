import { createAction, createReducer, createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { NewsServices } from 'api/services/NewsServices';

export const fetchNews = createAsyncThunk('news/fetchNews', async () => {
  const data = await NewsServices.getAll();
  return data;
});
