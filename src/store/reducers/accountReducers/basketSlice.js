import { createSlice } from '@reduxjs/toolkit';
import {
  addBasketServiceThunk,
  deleteBasketServiceThunk,
  fetchAllBasketServicesThunk,
  fetchBasketServicesByUserIdThunk,
} from 'store/actions';

const basketSlice = createSlice({
  name: 'basket',
  initialState: {
    size: null,
    basketServices: [],
    basketService: null,
    isLoading: false,
    error: null,
    usersBaskets: {},
  },
  reducers: {
    setBasketServices(state, action) {
      state.basketServices = state.basketServices.filter((item) => item.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      //addServiceToBasket
      .addCase(addBasketServiceThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addBasketServiceThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.basketService = action.payload.service;
        state.error = null;
      })
      .addCase(addBasketServiceThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || action.error.message;
      });
    builder
      //getBasketServices
      .addCase(fetchAllBasketServicesThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllBasketServicesThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.basketServices = action.payload.services;
        state.error = null;
      })
      .addCase(fetchAllBasketServicesThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || action.error.message;
      })
      //deleteBasketServices
      .addCase(deleteBasketServiceThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteBasketServiceThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.basketService = action.payload.service;
        state.error = null;
      })
      .addCase(deleteBasketServiceThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || action.error.message;
      })
      // getBasketServicesByUserIdThunk (чужая корзина)
      .addCase(fetchBasketServicesByUserIdThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBasketServicesByUserIdThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        const userId = action.payload.userId;
        console.log(userId);
        state.usersBaskets[userId] = action.payload.services;
        state.error = null;
      })
      .addCase(fetchBasketServicesByUserIdThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default basketSlice.reducer;
export const { setBasketServices } = basketSlice.actions;
