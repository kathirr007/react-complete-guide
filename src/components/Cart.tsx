import type { Meal } from '@/types';

export function Cart() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const cartTotal = cartCtx.items.reduce((cartTotalPrice: number, item: Meal) => {
    return cartTotalPrice + (+item.price * (item.quantity ?? 0));
  }, 0);

  function handleCloseCart() {
    userProgressCtx.hideCart();
  }

  function handleAddMeal(item: Meal) {
    cartCtx.addItem(item);
  }

  function handleRemoveMeal(id: string) {
    cartCtx.removeItem(id);
  }

  function handleGotoCheckout() {
    userProgressCtx.showCheckout();
  }

  return (
    <UiModal className="cart" open={userProgressCtx.progress === 'cart'} onClose={userProgressCtx.progress === 'cart' ? handleCloseCart : null}>
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item: Meal) => (
          <CartItem item={item} key={item.id} onAddItem={() => handleAddMeal(item)} onRemoveItem={() => handleRemoveMeal(item.id)} />
        ))}
      </ul>
      <div className="cart-total">
        {currencyFormatter.format(cartTotal)}
      </div>
      <p className="modal-actions">
        <UiButton textOnly onClick={handleCloseCart}>Close</UiButton>
        {!!cartCtx.items.length && (<UiButton onClick={handleGotoCheckout}>Go to Checkout</UiButton>)}
      </p>
    </UiModal>
  );
}
