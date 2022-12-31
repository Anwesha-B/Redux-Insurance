import { configureStore } from '@reduxjs/toolkit';
import combineReducers from '../reducers';

export const store = configureStore({
  reducer: {
    insurance: combineReducers,
  },
});
