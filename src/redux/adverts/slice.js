import { createSlice } from '@reduxjs/toolkit';
import { getCarsByPageThunk } from './operation';

const initialState = {
  advertsList: [],
  page: 1,
  isLoading: false,
  error: null,
  allAdvertsList: [],
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const advertsSlice = createSlice({
  name: 'adverts',
  initialState,
  reducers: {
    setPage: (state, { payload }) => {
      state.page = payload;
    },
  },
  extraReducers: {
    [getCarsByPageThunk.pending]: handlePending,
    [getCarsByPageThunk.fulfilled](state, { payload }) {
      state.advertsList = [...state.advertsList, ...payload];
      state.isLoading = false;
    },
    [getCarsByPageThunk.rejected]: handleRejected,
  },
});

export const advertsReducer = advertsSlice.reducer;

export const { setPage } = advertsSlice.actions;
