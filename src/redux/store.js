import { configureStore } from '@reduxjs/toolkit';
import citySlice from '../cities/citySlice';

export const store = configureStore({
  reducer: {
    cities: citySlice.reducer,
  },
});

//Export Actions
export const citiesActions = citySlice.actions;

//Export Thunks
export * from './cities/cityThunk';