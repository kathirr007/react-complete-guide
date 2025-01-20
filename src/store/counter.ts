import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    inc(state) {
      state.counter++;
    },
    dec(state) {
      state.counter--;
    },
    increase(state, action: {
      payload: number;
      type: string;
    }) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    }
  }
});

const counterActions = counterSlice.actions;
const counterReducer = counterSlice.reducer;

export {
  counterActions, counterReducer
};
