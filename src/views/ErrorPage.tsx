import { useRouteError } from 'react-router';

export default function ErrorPage() {
  const error: any = useRouteError();

  let title = 'An error occurred..!';
  let message = 'Something went wrong..!';

  if (error.status === 500) {
    message = JSON.parse(error.data).message;
  }

  if (error.status === 404) {
    title = 'Not found..!';
    message = 'Could not found page or resource..!';
  }

  return (
    <PageContent title={title}>
      <p>{message}</p>
    </PageContent>
  );
}
