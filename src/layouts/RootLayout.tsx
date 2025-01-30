import { Outlet, useLoaderData, useSubmit } from 'react-router';

export default function RootLayout() {
  const token = useLoaderData();
  const submit = useSubmit();

  useEffect(() => {
    if (!token) {
      return;
    }

    if (token === 'EXPIRED') {
      submit(null, { action: '/logout', method: 'POST' });
      return;
    }

    const tokenDuration = getTokenDuration();

    const timer = setTimeout(() => {
      submit(null, { action: '/logout', method: 'POST' });
    }, tokenDuration);

    return () => {
      clearTimeout(timer);
    };
  }, [token, submit]);

  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}
