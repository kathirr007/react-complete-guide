import { NavLink, useRouteLoaderData } from 'react-router';
import classes from './EventsNavigation.module.css';

function EventsNavigation() {
  const token = useRouteLoaderData('root');

  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/events">All Events</NavLink>
          </li>
          {token && (
            <li>
              <NavLink to="/events/new">New Event</NavLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export { EventsNavigation };
