import { type ActionFunctionArgs, redirect } from 'react-router';

export async function deleteEvent({ request, params }: ActionFunctionArgs) {
  const response = await fetch(`${baseUrl}/events/${params.eventId}`, {
    // method: 'DELETE'
    method: request.method
  });

  if (!response.ok) {
    throw new Response(JSON.stringify({ message: 'Could not delete the event..!' }), { status: 500 });
  }

  return redirect('/events');
}
