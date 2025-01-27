import { createContext } from 'react';

export const ProductsContext = createContext<{
  products: Product[];
  toggleFav: (id: string) => void;
}>({
      products: [],
      toggleFav: (id: string): void => { }
    });
