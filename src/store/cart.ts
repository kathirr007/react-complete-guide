import { createSlice } from '@reduxjs/toolkit';

export interface CartItemType {
  id: string;
  price: number;
  totalPrice: number;
  title: string;
  description: string;
  quantity?: number;
}

const cartInitialState: { items: CartItemType[]; totalQuantity: number } = {
  items: [],
  totalQuantity: 0
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: cartInitialState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item: CartItemType) => item.id === newItem.id);
      state.totalQuantity++;

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
    }
  }
});

const cartReducer = cartSlice.reducer;
const cartActions = cartSlice.actions;

export {
  cartActions, cartReducer
};
