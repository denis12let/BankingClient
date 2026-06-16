import { createAsyncThunk } from '@reduxjs/toolkit';
import { BasketServices } from 'api/services';

export const fetchAllBasketServicesThunk = createAsyncThunk('/basket/getAll', async (query = '', { rejectWithValue }) => {
  try {
    const data = await BasketServices.getAll(query);
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});

export const fetchBasketSizeThunk = createAsyncThunk('/basket/getBasketSize', async (_, { rejectWithValue }) => {
  try {
    const data = await BasketServices.getBasketSize();
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});

export const fetchBasketServicesByUserIdThunk = createAsyncThunk('basket/getServicesByUserId', async (userId, { rejectWithValue }) => {
  if (!userId) return rejectWithValue('userId is required');
  try {
    const data = await BasketServices.getServicesByUserId(userId);
    data['userId'] = userId;
    return data;
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || error.message);
  }
});

export const fetchOneBasketServiceByIdThunk = createAsyncThunk('/basket/getBasketService', async (id, { rejectWithValue }) => {
  try {
    const data = await BasketServices.getServiceById(id);
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});

export const addBasketServiceThunk = createAsyncThunk('/basket/add', async (serviceData, { rejectWithValue }) => {
  try {
    const data = await BasketServices.addService(serviceData);
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});
export const approveBasketServiceThunk = createAsyncThunk('/basket/approve', async (approveData, { rejectWithValue }) => {
  try {
    const data = await BasketServices.approveService(approveData);

    return data;
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});
export const deleteBasketServiceThunk = createAsyncThunk('/basket/delete', async (id, { rejectWithValue }) => {
  try {
    const data = await BasketServices.deleteService(id);
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});
