import { configureStore } from '@reduxjs/toolkit';
import calculatorSlice from '../features/calculator/calculatorSlice';

export const store = configureStore({
  reducer: {
    calculator: calculatorSlice,
  },
});
