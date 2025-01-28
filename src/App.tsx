// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import { createBrowserRouter, RouterProvider } from 'react-router';
import EventsLayout from './layouts/EventsLayout';
import RootLayout from './layouts/RootLayout';
import { eventLoader } from './loaders/eventLoader';
import { eventsLoader } from './loaders/eventsLoader';
import EditEventPage from './views/EditEventPage';
import ErrorPage from './views/ErrorPage';
import EventDetailsPage from './views/EventDetailsPage';
import EventsPage from './views/EventsPage';
import HomePage from './views/HomePage';
import NewEventPage from './views/NewEventPage';

const router = createBrowserRouter([
  { path: '/', element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> }
    ]
  },
  { path: 'events', element: <EventsLayout />, errorElement: <ErrorPage />,
    children: [
      { index: true, element: <EventsPage />, loader: eventsLoader },
      { path: ':eventId', id: 'event-detail', loader: eventLoader,
        children: [
          { index: true, element: <EventDetailsPage />, loader: eventLoader },
          { path: 'edit', element: <EditEventPage /> }
        ]
      },
      { path: 'new', element: <NewEventPage /> }
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
