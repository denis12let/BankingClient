import { createAsyncThunk } from '@reduxjs/toolkit';
import { AccountServices } from 'api/services';

export const fetchCurrentUserAccountThunk = createAsyncThunk('/accounts/get', async (_, { rejectWithValue }) => {
  try {
    const data = await AccountServices.get();
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});

export const updateAccountBalanceThunk = createAsyncThunk('/accounts/updateBalance', async (transferData, { rejectWithValue }) => {
  try {
    const data = await AccountServices.updateBalance(transferData);
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});
