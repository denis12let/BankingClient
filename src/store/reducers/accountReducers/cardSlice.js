import { createSlice } from '@reduxjs/toolkit';
import { fetchAllCurrentUserCardsThunk } from 'store/actions';

const cardSlice = createSlice({
  name: 'card',
  initialState: {
    card: null,
    cards: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      //getCards
      .addCase(fetchAllCurrentUserCardsThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllCurrentUserCardsThunk.fulfilled, (state, action) => {
        state.cards = action.payload.cards;
        state.isLoading = false;
      })
      .addCase(fetchAllCurrentUserCardsThunk.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      });
  },
});

export default cardSlice.reducer;
