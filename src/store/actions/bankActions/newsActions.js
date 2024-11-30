import { createAsyncThunk } from '@reduxjs/toolkit';
import { NewsServices } from 'api/services';

export const fetchAllNewsThunk = createAsyncThunk('/news/getAll', async (_, { rejectWithValue }) => {
  try {
    const data = await NewsServices.getAll();
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});

export const fetchOneNewsByIdThunk = createAsyncThunk('/news/getById', async (id, { rejectWithValue }) => {
  try {
    const data = await NewsServices.getOneById(id);
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});

export const createNewsThunk = createAsyncThunk('/news/create', async (newsData, { rejectWithValue }) => {
  try {
    const data = await NewsServices.create(newsData);
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});

export const updateNewsThunk = createAsyncThunk('/news/update', async ({ id, newsData }, { rejectWithValue }) => {
  try {
    const data = await NewsServices.update(id, newsData);
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});

export const deleteNewsThunk = createAsyncThunk('/news/delete', async (id, { rejectWithValue }) => {
  try {
    const data = await NewsServices.delete(id);
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});
