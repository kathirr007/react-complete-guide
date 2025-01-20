import { useDispatch, useSelector } from 'react-redux';
import classes from './Header.module.css';

function Header() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state: ReturnType<typeof store.getState>) => state.authStore.isAuthenticated);

  function handleLogout() {
    dispatch(authActions.logout());
  }

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuthenticated && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>

            <li>
              <button onClick={handleLogout} type="button">Logout</button>
            </li>
          </ul>
        </nav>
      )}

    </header>
  );
}

export { Header };
