export async function loadEvents() {
  const response = await fetch(`${baseUrl}/events`);
  if (!response.ok) {
    // handle errors
    throw new Response(JSON.stringify({ message: 'Could not fetch the events data.' }), { status: 500 });
  }
  else {
    const resData = await response.json();
    return resData.events;
  }
}

export function eventsLoader() {
  return {
    events: loadEvents()
  };
}
