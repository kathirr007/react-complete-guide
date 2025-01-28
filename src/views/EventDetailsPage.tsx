import { Suspense } from 'react';
import { Await, useRouteLoaderData } from 'react-router';

export default function EventDetailsPage() {
  const { event, events } = useRouteLoaderData('event-detail');
  const params = useParams();

  return (
    <>
      <Suspense key={params.eventId} fallback={<p style={{ textAlign: 'center' }}>Loading event...</p>}>
        <Await resolve={event}>
          {loadedEvent => (<EventForm event={loadedEvent} method="PATCH" />)}
        </Await>
      </Suspense>
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading events...</p>}>
        <Await resolve={events}>
          {loadedEvents => (<EventsList events={loadedEvents} />)}
        </Await>
      </Suspense>
    </>
  );
}
