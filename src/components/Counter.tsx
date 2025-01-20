import type { CounterState } from '@/store';

import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';

function Counter() {
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {};

  const incHandler = () => {
    dispatch({ type: 'increment' });
  };

  const decHandler = () => {
    dispatch({ type: 'decrement' });
  };

  const counter = useSelector((state: CounterState) => state.counter);

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={decHandler} type="button">Decrement</button>
        <button onClick={incHandler} type="button">Increment</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
}

export { Counter };
