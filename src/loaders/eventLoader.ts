import type { LoaderFunctionArgs } from 'react-router';

export async function eventLoader({ request, params }: LoaderFunctionArgs<any>) {
  const response = await fetch(`http://localhost:8080/events/${params.eventId}`);
  if (!response.ok) {
    // handle errors
    throw new Response(JSON.stringify({ message: 'Could not fetch the event details data.' }), { status: 500 });
  }
  else {
    return response;
  }
}
