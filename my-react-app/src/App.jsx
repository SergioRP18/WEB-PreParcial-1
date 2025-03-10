import './App.css';
import React, { useState } from 'react';
import ProductList from './components/productList/ProductList';
import Cart from './components/cart/Cart';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(prevCart => {
      const itemExists = prevCart.find(item => item.id === product.id);
      if (itemExists) {
        return prevCart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const updateCart = (id, quantity) => {
    setCart(prevCart => {
      if (quantity === 0) return prevCart.filter(item => item.id !== id);
      return prevCart.map(item => (item.id === id ? { ...item, quantity } : item));
    });
  };

  return (
    <div>
      <h1>Tienda AutoPartes</h1>
      <ProductList addToCart={addToCart} />
      <Cart cart={cart} updateCart={updateCart} />
    </div>
  );
};

export default App;
