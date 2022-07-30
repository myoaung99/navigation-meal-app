import { createSlice } from "@reduxjs/toolkit";

const favoriteMealsSlice = createSlice({
  name: "favoriteMeals",
  initialState: {
    ids: [],
  },
  reducers: {
    addFavorite: (state, actions) => {
      state.ids = [...state.ids, actions.payload.id];
    },
    removeFavorite: (state, actions) => {
      state.ids = state.ids.filter((id) => id !== actions.payload.id);
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteMealsSlice.actions;
export default favoriteMealsSlice.reducer;
