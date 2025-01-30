import { redirect } from 'react-router';

export function logoutAction() {
  localStorage.removeItem('token');
  localStorage.removeItem('expiration');

  return redirect('/');
}
