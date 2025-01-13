import logoImg from '@/assets/logo.jpg';
import { CartContext } from '@/store/CartContext';
import { UserProgressContext } from '@/store/UserProgressContext';
import { useContext } from 'react';

export function Header() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  function handleShowCart() {
    userProgressCtx.showCart();
  }

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="logo" />
        <h1>Delicious Food</h1>
      </div>
      <nav>
        <UiButton textOnly type="button" onClick={handleShowCart}>
          Cart (
          {totalCartItems}
          )
        </UiButton>
      </nav>
    </header>
  );
}
