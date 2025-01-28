import { Suspense } from 'react';
import { Await, useLoaderData } from 'react-router';

function EventsPage() {
  const { events } = useLoaderData();

  return (
    <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading Events...</p>}>
      <Await resolve={events}>
        {loadEvents => (<EventsList events={loadEvents} />)}
      </Await>
    </Suspense>
  );
}

export default EventsPage;
