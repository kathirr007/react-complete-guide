import type { FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './Auth.module.css';

function Auth() {
  const dispatch = useDispatch();
  function handleLogin(event: FormEvent) {
    event.preventDefault();
    dispatch(authActions.login());
  }

  const isAuthenticated = useSelector((state: ReturnType<typeof store.getState>) => state.authStore.isAuthenticated);

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={handleLogin}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input required type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input required type="password" id="password" />
          </div>
          <button type="submit">
            {isAuthenticated ? 'Logout' : 'Login'}
          </button>
        </form>
      </section>
    </main>
  );
}

export { Auth };
