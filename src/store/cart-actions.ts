import type { Dispatch, UnknownAction } from '@reduxjs/toolkit';

export function sendCartData(cart: Partial<typeof cartInitialState>) {
  return async (dispatch: Dispatch<UnknownAction>) => {
    dispatch(uiActions.showNotification({
      status: 'pending',
      title: 'Sending data...',
      message: 'Sending cart data to firebase.'
    }));

    const sendRequest = async () => {
      const response = await fetch('https://react-practice-85ca9-default-rtdb.firebaseio.com/cart.json', {
        method: 'PUT',
        body: JSON.stringify(cart)
      });

      if (!response.ok) {
        throw new Error('Sending cart data failed.');
      }
    };

    try {
      await sendRequest();
      dispatch(uiActions.showNotification({
        status: 'success',
        title: 'Success ...!',
        message: 'Cart data successfully sent to firebase.'
      }));
    }
    catch (error) {
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error ...!',
        message: 'Sending cart data failed.'
      }));
      throw new Error('Sending cart data failed.');
    }
  };
}

export function fetchCartData() {
  return async (dispatch: Dispatch<UnknownAction>) => {
    const sendRequest = async () => {
      const response = await fetch('https://react-practice-85ca9-default-rtdb.firebaseio.com/cart.json');

      if (!response.ok) {
        throw new Error('Sending cart data failed.');
      }

      const data = await response.json();

      return data;
    };

    try {
      const cartData = await sendRequest();
      dispatch(cartActions.replaceCart({ ...cartData, items: cartData.items || [] }));
    }
    catch (error) {
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error ...!',
        message: 'Fetching cart data failed.'
      }));
      throw new Error('Fetching cart data failed.');
    }
  };
}
