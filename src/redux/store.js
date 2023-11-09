import { configureStore } from '@reduxjs/toolkit';
import citySlice from '../cities/citySlice';

export const store = configureStore({
  reducer: {
    cities: citySlice.reducer,
  },
});