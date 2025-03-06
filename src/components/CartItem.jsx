// src/components/CartItem.jsx
import React from 'react';

const CartItem = ({ name, price, quantity, image }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
      <img src={image} alt={name} style={{ width: '50px', height: 'auto', marginRight: '20px' }} />
      <div>
        <h3>{name}</h3>
        <p>Price: ${price}</p>
        <p>Quantity: {quantity}</p>
      </div>
      <button style={{ marginLeft: '20px' }}>Remove</button>
    </div>
  );
};

export default CartItem;
