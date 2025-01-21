import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';

let isInitial = true;

function App() {
  const isCartVisible = useSelector((state: ReturnType<typeof store.getState>) => state.uiStore.isVisible);
  const cart = useSelector((state: ReturnType<typeof store.getState>) => state.cartStore);
  const notification = useSelector((state: ReturnType<typeof store.getState>) => state.uiStore.notification);

  const dispatch = useDispatch();

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(uiActions.showNotification({
        status: 'pending',
        title: 'Sending data...',
        message: 'Sending cart data to firebase.'
      }));

      const response = await fetch('https://react-practice-85ca9-default-rtdb.firebaseio.com/cart.json', {
        method: 'PUT',
        body: JSON.stringify(cart)
      });

      if (!response.ok) {
        throw new Error('Sending cart data failed.');
      }

      dispatch(uiActions.showNotification({
        status: 'success',
        title: 'Success ...!',
        message: 'Cart data successfully sent to firebase.'
      }));
    };

    if (isInitial) {
      isInitial = false;
      return;
    }

    sendCartData().catch((error) => {
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error ...!',
        message: 'Sending cart data failed.'
      }));
      throw new Error(error);
    });
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
