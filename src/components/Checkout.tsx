import type { Meal } from '@/types';
import { type FormEvent, useActionState } from 'react';

const requestConfig: RequestInit = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
};

export function Checkout() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const { data, error, sendRequest, clearData } = useHttp(`${baseUrl}/orders`, requestConfig);

  const cartTotal = cartCtx.items.reduce((cartTotalPrice: number, item: Meal) => {
    return cartTotalPrice + (+item.price * (item.quantity ?? 0));
  }, 0);

  function handleClose() {
    userProgressCtx.hideCheckout();
  }

  function handleFinish() {
    userProgressCtx.hideCheckout();
    cartCtx.clearCart();
    clearData();
  }
  /* function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const fd = new FormData(event.target as HTMLFormElement);

    const customerData = { ...Object.fromEntries(fd.entries()) };

    sendRequest(JSON.stringify({
      order: {
        items: cartCtx.items,
        customer: { ...customerData }
      }
    }));
  } */
  async function handleCheckoutAction(prevState: any, formData: any) {
    const customerData = { ...Object.fromEntries(formData.entries()) };

    await sendRequest(JSON.stringify({
      order: {
        items: cartCtx.items,
        customer: { ...customerData }
      }
    }));
  }

  const [formState, formAction, isSending] = useActionState(handleCheckoutAction, null);

  if (data && !error) {
    return (
      <UiModal open={userProgressCtx.progress === 'checkout'} onClose={handleFinish}>
        <h2>Success...!</h2>
        <p>
          Your order was submitted successfully.
        </p>
        <p>
          We will get back to you with more details via email within next few minutes.
        </p>
        <div className="modal-actions">
          <UiButton onClick={handleFinish}>Okay</UiButton>
        </div>
      </UiModal>
    );
  }

  return (
    <UiModal open={userProgressCtx.progress === 'checkout'} onClose={userProgressCtx.progress === 'checkout' ? handleClose : null}>
      <form action={formAction}>
        <h2>Checkout</h2>
        <p>
          Total Amount:
          {' '}
          {currencyFormatter.format(cartTotal)}
        </p>
        <UiInput label="Full Name" id="name" name="name" type="text" />
        <UiInput label="Email" id="email" name="email" type="email" />
        <UiInput label="Street" id="street" name="street" type="text" />
        <div className="control-row">
          <UiInput label="City" id="city" name="city" type="text" />
          <UiInput label="Postal Code" id="postal-code" name="postal-code" type="text" />
        </div>
        {error && <ErrorBlock title="Failed to submit the order" message={error} />}
        <div className="modal-actions">
          <UiButton type="button" textOnly onClick={handleClose}>Close</UiButton>
          <UiButton type="submit">{isSending ? 'Sending data...' : 'Submit Order'}</UiButton>
        </div>
      </form>
    </UiModal>
  );
}
