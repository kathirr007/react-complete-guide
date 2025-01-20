import { createStore } from 'redux';

export interface CounterState {
  counter: number;
}

function counterReducer(state: CounterState = { counter: 0 }, action: { type: string; [key: string]: any }) {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1
    };
  }
  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1
    };
  }

  return state;
}

const store = createStore(counterReducer);

export { store };
