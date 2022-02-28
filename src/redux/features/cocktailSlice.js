import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//Fatch Cocktail
export const fatchCocktails = createAsyncThunk(
  "coaktails/fatchCocktails",
  async () => {
    return fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
    ).then((res) => res.json());
  }
);

//Fatch Single Cocktail
export const fatchSingleCocktails = createAsyncThunk(
  "coaktails/fatchSingleCocktails",
  async ({ id }) => {
    return fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    ).then((res) => res.json());
  }
);

const cocktailSlice = createSlice({
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
    [fatchSingleCocktails.pending]: (state, action) => {
      state.loading = true;
    },
    [fatchSingleCocktails.fulfilled]: (state, action) => {
      state.cocktail = action.payload.drinks;
      state.loading = false;
    },
    [fatchSingleCocktails.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default cocktailSlice.reducer;
