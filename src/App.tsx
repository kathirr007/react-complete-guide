import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';

function App() {
  const isCartVisible = useSelector((state: ReturnType<typeof store.getState>) => state.uiStore.isVisible);

  return (
    <>
      <Layout>
        {isCartVisible && <Cart />}
        <ShopProducts />
      </Layout>
      <ToastContainer />
    </>
  );
}

export default App;
