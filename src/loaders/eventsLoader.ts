export async function eventsLoader() {
  const response = await fetch('http://localhost:8080/events');
  if (!response.ok) {
    // handle errors
    throw new Response(JSON.stringify({ message: 'Could not fetch the events data.' }), { status: 500 });
  }
  else {
    const resData = await response.json();
    return resData.events;
  }
}
