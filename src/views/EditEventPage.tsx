import { useRouteLoaderData } from 'react-router';

export default function EditEventPage() {
  const data = useRouteLoaderData('event-detail');

  return (
    <EventForm event={data.event} method="PATCH" />
  );
}
