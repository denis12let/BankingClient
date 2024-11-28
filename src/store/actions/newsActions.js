import { createAsyncThunk } from '@reduxjs/toolkit';

import { NewsServices } from 'api/services/NewsServices';

export const getNewsThunk = createAsyncThunk('news/getNews', async () => {
  const data = await NewsServices.getAll();
  return data;
});
