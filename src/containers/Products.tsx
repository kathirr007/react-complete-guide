import { ProductsContext } from '@/context/products-context';

import './Products.css';

function Products(props: any) {
  // const productList = useSelector((state: RootState) => state.shop.products);

  const productsList = useContext(ProductsContext).products;

  return (
    <ul className="products-list">
      {productsList.map(prod => (
        <ProductsProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
}

export default Products;
