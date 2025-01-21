import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    uiStore: uiReducer,
    cartStore: cartReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;

export { store };
