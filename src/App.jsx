import React from 'react'
import { Routes, Route } from "react-router-dom";
import ProductList from './components/ProductList'
import ProductDetail from './components/ProductDetail'
import Favorites from './components/Favorites'
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  );
};

export default App;
