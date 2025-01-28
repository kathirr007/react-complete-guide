import { type ActionFunctionArgs, redirect } from 'react-router';

export async function eventAction({ request, params }: ActionFunctionArgs) {
  const data = await request.formData();
  const eventData = Object.fromEntries(data.entries());

  let url = `${baseUrl}/events`;

  if (request.method === 'PATCH') {
    url = `${url}/${params.eventId}`;
  }

  const response = await fetch(url, {
    method: request.method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(eventData)
  });

  if (response.status === 422) {
    return response;
  }

  if (!response.ok) {
    throw new Response(JSON.stringify({ message: 'Could not send the data to backend..!' }), { status: 500 });
  }

  return redirect('/events');
}
