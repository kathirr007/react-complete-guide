import type { Product } from '@/store/reducers/products';

import './Products.css';

function Favorites(props: any) {
  /* const favoriteProducts = useSelector((state: RootState) =>
    state.shop.products.filter(p => p.isFavorite)
  ); */
  const { products } = useContext(ProductsContext);
  const favoriteProducts = products.filter((prod: Product) => prod.isFavorite);

  let content = <p className="placeholder">Got no favorites yet!</p>;
  if (favoriteProducts.length > 0) {
    content = (
      <ul className="products-list">
        {favoriteProducts.map(prod => (
          <FavoritesFavoriteItem
            key={prod.id}
            id={prod.id}
            title={prod.title}
            description={prod.description}
          />
        ))}
      </ul>
    );
  }
  return content;
}

export default Favorites;
