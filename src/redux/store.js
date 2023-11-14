import { configureStore } from '@reduxjs/toolkit';
import citySlice from './cities/citySlice';
import gameSlice from './games/gameSlice';

export const store = configureStore({
  reducer: {
    cities: citySlice.reducer,
    game: gameSlice.reducer,
  },
});

//Export Actions
export const citiesActions = citySlice.actions;
export const gamesActions = gameSlice.actions;

//Export Thunks
export * from './cities/cityThunk';
export * from './games/gameThunk';