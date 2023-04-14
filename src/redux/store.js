import { configureStore } from '@reduxjs/toolkit';
import homeReducer from '../components/store/slice';

export const store = configureStore({
  reducer: {
    homePage: homeReducer,
  },
});
