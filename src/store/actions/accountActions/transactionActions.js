import { createAsyncThunk } from '@reduxjs/toolkit';
import { TransactionServices } from 'api/services';

export const fetchAllCurrentUserTransactionsThunk = createAsyncThunk('/transactions/getAllUser', async (query, { rejectWithValue }) => {
  try {
    const data = await TransactionServices.getAll(query);
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});

export const fetchOneTransactionByIdThunk = createAsyncThunk('/transactions/getById', async (id, { rejectWithValue }) => {
  try {
    const data = await TransactionServices.getOneById(id);
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});

export const fetchCalendarThunk = createAsyncThunk('/transactions/getCalendar', async (query, { rejectWithValue }) => {
  try {
    const data = await TransactionServices.getCalendar(query);
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});

export const fetchAllTransactionsThunk = createAsyncThunk('/transactions/getAll', async (query, { rejectWithValue }) => {
  try {
    const data = await TransactionServices.getUsersAll(query);
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});

export const deleteTransactionThunk = createAsyncThunk('/transactions/delete', async (id, { rejectWithValue }) => {
  try {
    const data = await TransactionServices.delete(id);
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});
