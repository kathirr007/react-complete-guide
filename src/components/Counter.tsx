import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';

function Counter() {
  const [incAmount] = useState(Math.floor((Math.random() * 10) + 1));
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  const incHandler = () => {
    dispatch(counterActions.inc());
  };

  const increaseHandler = (amount: number) => {
    dispatch(counterActions.increase(amount)); // {type: SOME_UNIQUE_IDENTIFIER, payload: amount}
  };

  const decHandler = () => {
    dispatch(counterActions.dec());
  };

  const counter = useSelector((state: ReturnType<typeof store.getState>) => state.counterStore.counter);
  const showCounter = useSelector((state: ReturnType<typeof store.getState>) => state.counterStore.showCounter);

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={decHandler} type="button">Decrement</button>
        <button onClick={() => increaseHandler(incAmount)} type="button">
          Increase by
          {' '}
          {' '}
          {incAmount}
        </button>
        <button onClick={incHandler} type="button">Increment</button>
      </div>
      <button type="button" onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
}

export { Counter };
