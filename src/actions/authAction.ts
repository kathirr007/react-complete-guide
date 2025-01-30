import { type ActionFunctionArgs, redirect } from 'react-router';

export async function authAction({ request, params }: ActionFunctionArgs) {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get('mode');

  if (mode && !['login', 'signup'].includes(mode)) {
    throw new Response(JSON.stringify({ message: 'Unsupported mode.' }), { status: 422 });
  }

  const formData = await request.formData();
  const authData = Object.fromEntries(formData.entries());

  const response = await fetch(`${baseUrl}/${mode}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(authData)
  });

  if (response.status === 401 || response.status === 422) {
    return response;
  }

  if (!response.ok) {
    throw new Response(JSON.stringify({ message: 'Could not authenticate the user.' }), { status: 500 });
  }

  const resData = await response.json();
  const token = resData.token;

  const expiration = new Date();
  expiration.setHours(new Date().getHours() + 1);

  localStorage.setItem('token', token);
  localStorage.setItem('expiration', expiration.toISOString());

  return redirect('/');
}
