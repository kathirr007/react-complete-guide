import classes from './CartButton.module.css';

function Button(props: any) {
  return (
    <button type="button" className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
}

export { Button };
