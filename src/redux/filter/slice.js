import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  make: null,
  price: 10,
  fromMileage: 0,
  toMileage: 0,
  isFilter: false,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, { payload }) => {
      state.make = payload.make;
      state.price = payload.price;
      state.fromMileage = payload.fromMileage;
      state.toMileage = payload.toMileage;
    },
    setMake: (state, { payload }) => {
      state.make = payload;
    },
    setPrice: (state, { payload }) => {
      state.price = payload;
    },
    setFromMileage: (state, { payload }) => {
      state.fromMileage = payload;
    },
    setToMileage: (state, { payload }) => {
      state.toMileage = payload;
    },
    setIsFilter: (state, { payload }) => {
      state.isFilter = payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;

export const {
  setFilter,
  setMake,
  setPrice,
  setFromMileage,
  setToMileage,
  setIsFilter,
} = filterSlice.actions;
