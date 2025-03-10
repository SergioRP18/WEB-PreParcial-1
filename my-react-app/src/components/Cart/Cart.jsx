import React from 'react';
import './Cart.css';

const Cart = ({ cart, updateCart }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        cart.map(item => (
          <div key={item.id}>
            <p>{item.name} - ${item.price.toFixed(2)} x {item.quantity}</p>
            <button onClick={() => updateCart(item.id, item.quantity - 1)}>-</button>
            <button onClick={() => updateCart(item.id, item.quantity + 1)}>+</button>
            <button onClick={() => updateCart(item.id, 0)}>Eliminar</button>
          </div>
        ))
      )}
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;