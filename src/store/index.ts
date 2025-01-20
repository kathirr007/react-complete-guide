import { createStore } from 'redux';

export interface CounterState {
  counter: number;
  showCounter: boolean;
}

const initialState = { counter: 0, showCounter: true };

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

const store = createStore(counterReducer);

export { store };
