import { useRouteLoaderData } from 'react-router';

export default function EventDetailsPage() {
  const data = useRouteLoaderData('event-detail');

  return (
    <EventItem event={data.event} />
  );
}
