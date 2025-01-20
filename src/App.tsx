// import { storeConnect as CounterClass } from './components/CounterClass';

import { useSelector } from 'react-redux';

function App() {
  const isAuthenticated = useSelector((state: ReturnType<typeof store.getState>) => state.authStore.isAuthenticated);

  return (
    <>
      <Header />
      {isAuthenticated ? <UserProfile /> : <Auth />}
      <Counter />
    </>
  );
}

export default App;
