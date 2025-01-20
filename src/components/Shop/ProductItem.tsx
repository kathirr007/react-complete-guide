import classes from './ProductItem.module.css';

function ProductItem(props: any) {
  const { title, price, description } = props;

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
          <button>Add to Cart</button>
        </div>
      </UICard>
    </li>
  );
}

export { ProductItem };
