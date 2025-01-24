import type { RootState } from '@/main';
import React from 'react';

import { useSelector } from 'react-redux';
import './Products.css';

function Products(props: any) {
  const productList = useSelector((state: RootState) => state.shop.products);
  return (
    <ul className="products-list">
      {productList.map(prod => (
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
