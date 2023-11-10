import { createSlice } from "@reduxjs/toolkit";
import { getListCities, getCityById, getCityByName } from "./cityThunk"

const citySlice = createSlice({
  name: "city",
  initialState: {
    cities: [],
    isLoading: false,
    isError: "",
  },
  extraReducers: {
    // GET LIST OF CITIES
    [getListCities.pending]: (state) => {
      state.isLoading = true;
    },
    [getListCities.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.cities = action.payload;
      state.isError = "";
    },
    [getListCities.rejected]: (state, action) => {
      state.isLoading = false;
      state.cities = [];
      state.isError = action.error.message;
    },

    // GET CITY BY ID
    [getCityById.pending]: (state) => {
      state.isLoading = true;
    },
    [getCityById.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.cities = action.payload;
      state.isError = "";
    },
    [getCityById.rejected]: (state, action) => {
      state.isLoading = false;
      state.cities = [];
      state.isError = action.error.message;
    },

    // GET CITY BY NAME
    [getCityByName.pending]: (state) => {
      state.isLoading = true;
    },
    [getCityByName.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.cities = action.payload;
      state.isError = "";
    },
    [getCityByName.rejected]: (state, action) => {
      state.isLoading = false;
      state.cities = [];
      state.isError = action.error.message;
    },
  },
});

export default citySlice;