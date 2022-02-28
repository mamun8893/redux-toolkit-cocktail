import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fatchCocktails = createAsyncThunk(
  "coaktails/fatchCocktails",
  async () => {
    return fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
    ).then((res) => res.json());
  }
);

export const cocktailSlice = createSlice({
  name: "cocktails",
  initialState: {
    cocktails: [],
    cocktail: [],
    loading: false,
    error: null,
  },
  extraReducers: {
    [fatchCocktails.pending]: (state, action) => {
      state.loading = true;
    },
    [fatchCocktails.fulfilled]: (state, action) => {
      state.cocktails = action.payload.drinks;
      state.loading = false;
    },
    [fatchCocktails.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
