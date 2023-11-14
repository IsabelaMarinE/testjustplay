import { createSlice } from "@reduxjs/toolkit";
import { getGamesByCity, createGame, updateGame, filterGame, getGameById, getAllGames } from "./gameThunk";

const gameSlice = createSlice({
  name: "games",
  initialState: {
    games: [],
    isLoading: false,
    isError: "",
  },
  extraReducers: {
    // GET LIST OF GAME
    [getAllGames.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllGames.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.games = action.payload;
      state.isError = "";
    },
    [getAllGames.rejected]: (state, action) => {
      state.isLoading = false;
      state.games = [];
      state.isError = action.error.message;
    },
    // GET LIST OF GAME BY SELECTED CITY
    [getGamesByCity.pending]: (state) => {
      state.isLoading = true;
    },
    [getGamesByCity.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.games = action.payload;
      state.isError = "";
    },
    [getGamesByCity.rejected]: (state, action) => {
      state.isLoading = false;
      state.games = [];
      state.isError = action.error.message;
    },

    // CREATE A NEW GAME
    [createGame.pending]: (state) => {
      state.isLoading = true;
    },
    [createGame.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.games = action.payload;
      state.isError = "";
    },
    [createGame.rejected]: (state, action) => {
      state.isLoading = false;
      state.games = [];
      state.isError = action.error.message;
    },

    // UPDATE A GAME 
    [updateGame.pending]: (state) => {
      state.isLoading = true;
    },
    [updateGame.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.games = action.payload;
      state.isError = "";
    },
    [updateGame.rejected]: (state, action) => {
      state.isLoading = false;
      state.games = [];
      state.isError = action.error.message;
    },

    // FILTER GAME BY NAME 
    [filterGame.pending]: (state) => {
      state.isLoading = true;
    },
    [filterGame.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.games = action.payload;
      state.isError = "";
    },
    [filterGame.rejected]: (state, action) => {
      state.isLoading = false;
      state.games = [];
      state.isError = action.error.message;
    },

    // GET GAME BY ID 
    [getGameById.pending]: (state) => {
      state.isLoading = true;
    },
    [getGameById.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.games = action.payload;
      state.isError = "";
    },
    [getGameById.rejected]: (state, action) => {
      state.isLoading = false;
      state.games = [];
      state.isError = action.error.message;
    },
  },
});


export default gameSlice;