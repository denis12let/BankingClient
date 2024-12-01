import { createAsyncThunk } from '@reduxjs/toolkit';
import { ServiceServices } from 'api/services';

export const fetchAllServicesThunk = createAsyncThunk('/services/getAll', async (query = '', { rejectWithValue }) => {
  try {
    const data = await ServiceServices.getAll(query);
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});

export const fetchOneServiceByIdThunk = createAsyncThunk('/services/getById', async (id, { rejectWithValue }) => {
  try {
    const data = await ServiceServices.getOneById(id);
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});

export const createServiceThunk = createAsyncThunk('/services/create', async (serviceData, { rejectWithValue }) => {
  try {
    const data = await ServiceServices.create(serviceData);
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});

export const updateServiceThunk = createAsyncThunk('/services/update', async ({ id, serviceData }, { rejectWithValue }) => {
  try {
    const data = await ServiceServices.update(id, serviceData);
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});

export const deleteServiceThunk = createAsyncThunk('/services/delete', async (id, { rejectWithValue }) => {
  try {
    const data = await ServiceServices.delete(id);
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});
