import React from 'react';
import './ProductItem.css';

const ProductItem = ({ product, addToCart }) => {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>Precio: ${product.price.toFixed(2)}</p>
      <button onClick={() => addToCart(product)}>Agregar al carrito</button>
    </div>
  );
};
export default ProductItem;