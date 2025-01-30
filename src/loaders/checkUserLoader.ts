import type { LoaderFunctionArgs } from 'react-router';
import { redirect } from 'react-router';

export function checkUserLoader(loaderContext: LoaderFunctionArgs) {
  // this function will be added in the next lecture
  // make sure it looks like this in the end
  const token = getAuthToken();

  if (token) {
    return redirect('/');
  }

  return null; // this is missing in the next lecture video and should be added by you
}
