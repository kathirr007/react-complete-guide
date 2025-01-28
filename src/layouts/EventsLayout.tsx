import { Outlet } from 'react-router';

export default function EventsLayout() {
  return (
    <>
      <EventsNavigation />
      <Outlet />
    </>
  );
}
