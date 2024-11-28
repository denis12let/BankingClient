import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserServices } from 'api/services/UserServices';

export const registrationThunk = createAsyncThunk('/users/registration', async (user, { rejectWithValue }) => {
  try {
    const data = await UserServices.registration(user);
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});

export const loginThunk = createAsyncThunk('/users/login', async (user, { rejectWithValue }) => {
  try {
    const data = await UserServices.login(user);
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});
