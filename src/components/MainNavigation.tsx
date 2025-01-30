import classes from '@/components/MainNavigation.module.css';
import { Form, NavLink, useRouteLoaderData } from 'react-router';

function MainNavigation() {
  const token = useRouteLoaderData('root');

  const AuthenticationNav = (
    <li key={token}>
      {token
        ? (
            <Form
              action="/logout"
              method="POST"
            >
              <button type="submit">Logout</button>
            </Form>
          )
        : (
            <NavLink
              to="/auth?mode=login"
              className={({ isActive }) =>
                isActive ? classes.active : undefined}
            >
              Authentication
            </NavLink>
          )}
    </li>
  );

  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink end to="/" className={({ isActive }) => isActive ? classes.active : undefined}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/events" className={({ isActive }) => isActive ? classes.active : undefined}>Events</NavLink>
          </li>
          <li>
            <NavLink
              to="/newsletter"
              className={({ isActive }) =>
                isActive ? classes.active : undefined}
            >
              Newsletter
            </NavLink>
          </li>
          {AuthenticationNav }
        </ul>
      </nav>
      <NewsletterSignup />
    </header>
  );
}

export { MainNavigation };
