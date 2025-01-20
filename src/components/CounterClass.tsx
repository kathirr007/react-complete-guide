import type { CounterState } from '@/store';

import type { Dispatch } from 'react';
import type { UnknownAction } from 'redux';
import { Component } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';

const CounterClass = class extends Component {
  toggleCounterHandler() {};

  incHandler() {
    this.props.increment();
  };

  decHandler() {
    this.props.decrement();
  };

  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div>
          <button onClick={this.decHandler.bind(this)} type="button">Decrement</button>
          <button onClick={this.incHandler.bind(this)} type="button">Increment</button>
        </div>
        <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
      </main>
    );
  }
};

function mapStateToProps(state: CounterState) {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch: Dispatch<UnknownAction>) {
  return {
    increment: () => dispatch({ type: 'increment' }),
    decrement: () => dispatch({ type: 'decrement' })
  };
}

const storeConnect = connect(mapStateToProps, mapDispatchToProps)(CounterClass);

export { storeConnect };
