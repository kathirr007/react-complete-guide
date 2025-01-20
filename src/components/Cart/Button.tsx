import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';

function Button(props: any) {
  const dispatch = useDispatch();

  const cartQuantity = useSelector((state: ReturnType<typeof store.getState>) => state.cartStore.totalQuantity);

  function toggleCartHandler() {
    dispatch(uiActions.toggle());
  }

  return (
    <button type="button" className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
}

export { Button };
