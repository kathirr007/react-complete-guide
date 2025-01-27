import './ProductItem.css';

function ProductItem(props: any) {
  // const dispatch = useDispatch();
  const { toggleFav } = useContext(ProductsContext);

  const toggleFavHandler = () => {
    // dispatch(toggleFav(props.id));
    toggleFav(props.id);
  };

  return (
    <UICard style={{ marginBottom: '1rem' }}>
      <div className="product-item">
        <h2 className={props.isFav ? 'is-fav' : ''}>{props.title}</h2>
        <p>{props.description}</p>
        <button
          type="button"
          className={!props.isFav ? 'button-outline' : ''}
          onClick={toggleFavHandler}
        >
          {props.isFav ? 'Un-Favorite' : 'Favorite'}
        </button>
      </div>
    </UICard>
  );
}

export { ProductItem };
