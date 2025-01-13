import type { Meal } from '@/types';

export function Checkout() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const cartTotal = cartCtx.items.reduce((cartTotalPrice: number, item: Meal) => {
    return cartTotalPrice + (+item.price * (item.quantity ?? 0));
  }, 0);

  function handleClose() {
    userProgressCtx.hideCheckout();
  }

  return (
    <UiModal open={userProgressCtx.progress === 'checkout'} onClose={userProgressCtx.progress === 'checkout' ? handleClose : null}>
      <form action="">
        <h2>Checkout</h2>
        <p>
          Total Amount:
          {' '}
          {currencyFormatter.format(cartTotal)}
        </p>
        <UiInput label="First Name" id="first-name" type="text" />
        <UiInput label="Email" id="email" type="email" />
        <UiInput label="Street" id="street" type="text" />
        <div className="control-row">
          <UiInput label="City" id="city" type="text" />
          <UiInput label="Postal Code" id="postal-code" type="text" />
        </div>
        <div className="modal-actions">
          <UiButton type="button" textOnly onClick={handleClose}>Close</UiButton>
          <UiButton>Submit Order</UiButton>
        </div>
      </form>
    </UiModal>
  );
}
