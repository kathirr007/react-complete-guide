import type { ActionFunctionArgs } from 'react-router';

export async function newsletterSignup({ request }: ActionFunctionArgs) {
  const data = await request.formData();
  const email = data.get('email');

  // send to backend newsletter server ...
  console.log(email);
  return { message: 'Signup successful!' };
}
