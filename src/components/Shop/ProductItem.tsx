import { useDispatch } from 'react-redux';
import classes from './ProductItem.module.css';

function ProductItem(props: any) {
  const { title, price, description, id } = props;
  const dispatch = useDispatch();

  function addToCartHandler() {
    dispatch(cartActions.addItemToCart({
      title, price, description, id
    }));
  }

  return (
    <li className={classes.item}>
      <UICard>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>
            $
            {price.toFixed(2)}
          </div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button type="button" onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </UICard>
    </li>
  );
}

export { ProductItem };
