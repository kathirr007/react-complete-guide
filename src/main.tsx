import { ProductsContextProvider } from '@/context/products-context';
import productReducer from '@/store/reducers/products';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';
import { combineReducers, createStore } from 'redux';
import App from './App';
import './index.css';

const rootReducer = combineReducers({
  shop: productReducer
});

const store = createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>;

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  // <Provider store={store}>
  //   <BrowserRouter>
  //     <App />
  //   </BrowserRouter>
  // </Provider>
  <ProductsContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProductsContextProvider>
);
