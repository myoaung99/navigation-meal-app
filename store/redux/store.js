import { configureStore } from "@reduxjs/toolkit";
import favoriteMealsReducer from "./favoriteMeals-slice";

const store = configureStore({
  reducer: {
    favoriteMeals: favoriteMealsReducer,
  },
});

export default store;
