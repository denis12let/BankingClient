import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserServices } from 'api/services';

export const registerUserThunk = createAsyncThunk('/users/registration', async (userData, { rejectWithValue }) => {
  try {
    const data = await UserServices.registration(userData);
    localStorage.setItem('isAuth', true);
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});

export const loginUserThunk = createAsyncThunk('/users/login', async (userData, { rejectWithValue }) => {
  try {
    const data = await UserServices.login(userData);
    localStorage.setItem('isAuth', true);
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});

export const checkAuthThunk = createAsyncThunk('/users/check', async (_, { rejectWithValue }) => {
  try {
    const data = await UserServices.check();
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});

export const fetchCurrentUserThunk = createAsyncThunk('/users/getUser', async (_, { rejectWithValue }) => {
  try {
    const data = await UserServices.get();
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});

export const fetchUserByIdThunk = createAsyncThunk('/users/getUserById', async (id, { rejectWithValue }) => {
  try {
    const data = await UserServices.getOneById(id);
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});

export const fetchUserByEmailThunk = createAsyncThunk('/users/getUserByEmail', async (email, { rejectWithValue }) => {
  try {
    const data = await UserServices.getOneByEmail(email);
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});

export const fetchAllUsersThunk = createAsyncThunk('/users/getAll', async (query = '', { rejectWithValue }) => {
  try {
    const data = await UserServices.getAll(query);
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});

export const createUserThunk = createAsyncThunk('/users/create', async (userData, { rejectWithValue }) => {
  try {
    const data = await UserServices.create(userData);
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});

export const updateUserThunk = createAsyncThunk('/users/update', async (userData, { rejectWithValue }) => {
  try {
    const data = await UserServices.update(userData);
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});

export const deleteUserThunk = createAsyncThunk('/users/delete', async (id, { rejectWithValue }) => {
  try {
    const data = await UserServices.delete(id);
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});
