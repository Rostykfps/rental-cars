import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favoritesCars: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, { payload }) => {
      state.favoritesCars.push(payload);
    },
    removeFavorite: (state, { payload }) => {
      const favoriteList = state.favoritesCars.filter(
        (item) => item.id !== payload.id,
      );
      state.favoritesCars = favoriteList;
    },
  },
});

export const favoritesReducer = favoritesSlice.reducer;
export const { addFavorite, removeFavorite } = favoritesSlice.actions;
