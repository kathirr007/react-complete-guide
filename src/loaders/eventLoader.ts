import type { LoaderFunctionArgs } from 'react-router';

export async function loadEvent(id: string) {
  const response = await fetch(`${baseUrl}/events/${id}`);
  if (!response.ok) {
    // handle errors
    throw new Response(JSON.stringify({ message: 'Could not fetch the event details data.' }), { status: 500 });
  }
  else {
    // return response;
    const resData = await response.json();
    return resData.event;
  }
}

export async function eventLoader({ request, params }: LoaderFunctionArgs) {
  return {
    event: await loadEvent(params.eventId as string),
    events: loadEvents()
  };
}
