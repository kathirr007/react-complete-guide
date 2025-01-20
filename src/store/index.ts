import { configureStore, createSlice } from '@reduxjs/toolkit';

export interface CounterState {
  counter: number;
  showCounter: boolean;
}

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: 'counter',
  initialState,
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

function counterReducer(state: CounterState = initialState, action: { type: string; [key: string]: any }): CounterState {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter
    };
  }
  if (action.type === 'increase') {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter
    };
  }
  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter
    };
  }
  if (action.type === 'toggle') {
    return {
      counter: state.counter,
      showCounter: !state.showCounter
    };
  }

  return state;
}

// const store = createStore(counterReducer);
const store = configureStore({
  reducer: counterSlice.reducer
});

const counterActions = counterSlice.actions;

export { counterActions, store };
