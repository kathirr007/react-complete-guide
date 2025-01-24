import type { Product } from '@/store/reducers/products';
import { createContext } from 'react';

export const ProductsContext = createContext<{
  products: Product[];
  toggleFav: (id: string) => void;
}>({
      products: [],
      toggleFav: (id: string): void => {}
    });

export function ProductsContextProvider(props: any) {
  const [productsList, setProductsList] = useState<Product[]>([
    {
      id: 'p1',
      title: 'Red Scarf',
      description: 'A pretty red scarf.',
      isFavorite: false
    },
    {
      id: 'p2',
      title: 'Blue T-Shirt',
      description: 'A pretty blue t-shirt.',
      isFavorite: false
    },
    {
      id: 'p3',
      title: 'Green Trousers',
      description: 'A pair of lightly green trousers.',
      isFavorite: false
    },
    {
      id: 'p4',
      title: 'Orange Hat',
      description: 'Street style! An orange hat.',
      isFavorite: false
    }
  ]);

  function toggleFavorite(productId: string) {
    setProductsList((prevList: Product[]) => {
      const updatedProdsList = [...prevList];
      const foundProductIndex = updatedProdsList.findIndex((prod: Product) => prod.id === productId);
      updatedProdsList[foundProductIndex] = { ...updatedProdsList[foundProductIndex], isFavorite: !updatedProdsList[foundProductIndex]?.isFavorite };
      return [...updatedProdsList];
    });
  }

  return (
    <ProductsContext value={{ products: productsList, toggleFav: toggleFavorite }}>
      {props.children}
    </ProductsContext>
  );
};
