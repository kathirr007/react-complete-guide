import { type ActionFunctionArgs, redirect } from 'react-router';

export async function deleteEvent({ request, params }: ActionFunctionArgs) {
  const { token } = getAuthToken();

  const response = await fetch(`${baseUrl}/events/${params.eventId}`, {
    // method: 'DELETE'
    method: request.method,
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  if (!response.ok) {
    throw new Response(JSON.stringify({ message: 'Could not delete the event..!' }), { status: 500 });
  }

  return redirect('/events');
}
