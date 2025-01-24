import React from 'react';
import { Route, Routes } from 'react-router-dom';

import FavoritesPage from './containers/Favorites';
import ProductsPage from './containers/Products';

function App(props: any) {
  return (
    <>
      <NavNavigation />
      <main>
        <Routes>
          <Route path="/" Component={ProductsPage} />
          <Route path="/favorites" Component={FavoritesPage} />
        </Routes>
      </main>
    </>
  );
}

export default App;
