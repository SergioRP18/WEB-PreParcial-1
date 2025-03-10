import React, { useEffect, useState } from 'react';
import ProductItem from '../productItem/ProductItem';
import data from '../../data/data.json';
import './ProductList.css';

const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data);
  }, []);

  return (
    <div>
      <h2>Lista de Productos</h2>
      {products.map(product => (
        <ProductItem key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;