import type { UnknownAction } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';

let isInitial = true;

function App() {
  const isCartVisible = useSelector((state: ReturnType<typeof store.getState>) => state.uiStore.isVisible);
  const cart = useSelector((state: ReturnType<typeof store.getState>) => state.cartStore);
  const notification = useSelector((state: ReturnType<typeof store.getState>) => state.uiStore.notification);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartData() as unknown as UnknownAction);
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.isChanged) {
      const { isChanged, ...newCart } = cart;
      dispatch(sendCartData(newCart) as unknown as UnknownAction);
    }
  }, [cart, dispatch]);

  return (
    <>
      {notification && <UINotification status={notification.status} title={notification.title} message={notification.message} />}
      <Layout>
        {isCartVisible && <Cart />}
        <ShopProducts />
      </Layout>
      <ToastContainer />
    </>
  );
}

export default App;
