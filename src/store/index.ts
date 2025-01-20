import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    uiStore: uiReducer,
    cartStore: cartReducer
  }
});

export { store };
