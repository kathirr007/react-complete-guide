import { createContext, useReducer } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const CartContext = createContext({
  items: [],
  addItem: (item, showToast) => {},
  removeItem: (id) => {},
  clearCart: (id) => {}
});

function cartReducer(state, action) {
  if (action.type === 'ADD_ITEM') {
    const existingItemIndex = state.items.findIndex(item => item.id === action.item.id);
    const updatedItems = [...state.items];
    if (existingItemIndex > -1) {
      const existingItem = state.items[existingItemIndex];
      const updatedItem = {
        ...existingItem, quantity: existingItem.quantity + 1
      };
      updatedItems[existingItemIndex] = updatedItem;
    }
    else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }

    return { ...state, items: updatedItems };
  }
  if (action.type === 'REMOVE_ITEM') {
    const existingItemIndex = state.items.findIndex(item => item.id === action.id);
    const existingItem = state.items[existingItemIndex];
    const updatedItems = [...state.items];
    if (existingItem.quantity > 1) {
      const updatedItem = {
        ...existingItem, quantity: existingItem.quantity - 1
      };
      updatedItems[existingItemIndex] = updatedItem;
    }
    else {
      updatedItems.splice(existingItemIndex, 1);
    }

    return { ...state, items: updatedItems };
  }

  if (action.type === 'CLEAR_CART') {
    return { ...state, items: [] };
  }

  return state;
}

function Msg({ data }) {
  return (
    <div className="pr-6">
      <strong>{data.name}</strong>
      {' '}
      added to the cart successfully.
    </div>
  );
}

function CartContextProvider({ children }) {
  const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });

  const displayMsg = (item) => {
    toast(<Msg />,
      {
        data: {
          ...item
        }
      }
    );
  };

  function addItem(item, showToast) {
    dispatchCartAction({ type: 'ADD_ITEM', item });
    showToast && displayMsg(item);
  }

  function removeItem(id) {
    dispatchCartAction({ type: 'REMOVE_ITEM', id });
  }

  function clearCart() {
    dispatchCartAction({ type: 'CLEAR_CART' });
  }

  const cartContext = {
    items: cart.items,
    addItem,
    removeItem,
    clearCart
  };

  return (
    <CartContext value={cartContext}>
      {' '}
      {children}
      <ToastContainer />
    </CartContext>
  );
}

export { CartContext, CartContextProvider };
