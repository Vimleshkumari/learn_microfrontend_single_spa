// src/components/Cart.js
import React, { useContext } from 'react';
import FoodContext from '../context/FoodContext';

export default function Cart(params){
  const { cart, removeFromCart } = useContext(FoodContext);


  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
            <h3>{item.name}</h3>
            <p>Price: ${item.cost }</p>
            <button onClick={() => removeFromCart(item.id)}>Remove from Cart</button>
          </div>
        ))
      )}
    </div>
  );
};

;
