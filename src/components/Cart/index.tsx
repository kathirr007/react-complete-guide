import { useSelector } from 'react-redux';
import classes from './Cart.module.css';

function Cart(props: any) {
  const cartItems = useSelector((state: ReturnType<typeof store.getState>) => state.cartStore.items);

  return (
    <UICard className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map(item => (
          <CartItem
            key={item.id}
            item={{ title: item.title, quantity: item.quantity, id: item.id, total: item.totalPrice, price: item.price }}
          />

        ))}
      </ul>
    </UICard>
  );
}

export { Cart };
