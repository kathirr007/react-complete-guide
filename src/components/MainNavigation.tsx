import classes from '@/components/MainNavigation.module.css';
import { NavLink } from 'react-router';

function MainNavigation() {
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
        </ul>
      </nav>
    </header>
  );
}

export { MainNavigation };
