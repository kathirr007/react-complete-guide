import type { Dispatch, UnknownAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface CartItemType {
  id: string;
  price: number;
  totalPrice: number;
  title: string;
  description: string;
  quantity?: number;
}

export const cartInitialState: { items: CartItemType[]; totalQuantity: number; isChanged?: boolean } = {
  items: [],
  totalQuantity: 0,
  isChanged: false
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: cartInitialState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item: CartItemType) => item.id === newItem.id);
      state.totalQuantity++;
      state.isChanged = true;

      if (!existingItem) {
        const updatedItem = {
          ...newItem, quantity: 1, totalPrice: newItem.price
        };
        state.items.push(updatedItem);
      }
      else {
        (existingItem.quantity)!++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
      displayMsg(newItem, 'inc');
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item: CartItemType) => item.id === id);
      state.totalQuantity--;
      state.isChanged = true;
      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.items = state.items.filter(item => item.id !== id);
        }
        else {
          (existingItem.quantity as number)--;
          existingItem.totalPrice = existingItem?.totalPrice - existingItem?.price;
        }
        displayMsg(existingItem, 'dec');
      }
    },
    replaceCart(state, action) {
      state.items = action.payload.items;
      state.totalQuantity = action.payload.totalQuantity;
    }
  }
});

function sendCartData(cart: typeof cartInitialState) {
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

const cartReducer = cartSlice.reducer;
const cartActions = cartSlice.actions;

export {
  cartActions, cartReducer, sendCartData
};
