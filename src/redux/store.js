
import { configureStore } from '@reduxjs/toolkit';
import reducers from './cartSlice';

const store = configureStore({
  reducer: {
    cart: reducers,
  },
});

export default store