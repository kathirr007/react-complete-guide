import { configureStore } from '@reduxjs/toolkit';

export interface CounterState {
  counter: number;
  showCounter: boolean;
}

const store = configureStore({
  reducer: {
    counterStore: counterReducer,
    authStore: authReducer
  }
});

export { store };
