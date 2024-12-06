import { createAsyncThunk } from '@reduxjs/toolkit';
import { ProfileServices } from 'api/services';

export const fetchAllProfilesThunk = createAsyncThunk('/profiles/progetAll', async (_, { rejectWithValue }) => {
  try {
    const data = await ProfileServices.getAll();
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});

export const fetchOneProfileByUserIdThunk = createAsyncThunk('/profiles/getById', async (id, { rejectWithValue }) => {
  try {
    const data = await ProfileServices.getOneByUserId(id);
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});

export const fetchCurrentProfileThunk = createAsyncThunk('/profiles/get', async (_, { rejectWithValue }) => {
  try {
    const data = await ProfileServices.get();
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});

export const createProfileThunk = createAsyncThunk('/profiles/create', async (profileData, { rejectWithValue }) => {
  try {
    const data = await ProfileServices.create(profileData);
    localStorage.setItem('isProfile', true);
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});

export const updateProfileThunk = createAsyncThunk('/profiles/update', async (userData, { rejectWithValue }) => {
  try {
    const data = await ProfileServices.update(userData);
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});
