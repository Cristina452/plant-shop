// src/pages/Cart.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem'; // Per visualizzare gli articoli nel carrello

const Cart = () => {
  const cartItems = [
    {
      id: 1,
      name: 'Aloe Vera',
      price: 15,
      quantity: 1,
      image: '/public/immagini/aloe-vera.jpg'
    },
    {
      id: 2,
      name: 'Peace Lily',
      price: 25,
      quantity: 2,
      image: '/public/immagini/peace-lily.jpg'
    }
  ];

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Your Cart</h1>
      <div>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            image={item.image}
          />
        ))}
      </div>
      <h2>Total: ${totalPrice}</h2>
      <h3>Total Items: {totalItems}</h3>
      <Link to="/products">
        <button style={{ padding: '10px 20px', fontSize: '16px' }}>Continue Shopping</button>
      </Link>
      <button style={{ padding: '10px 20px', fontSize: '16px', marginLeft: '20px' }}>
        Checkout (Coming Soon)
      </button>
    </div>
  );
};

export default Cart;
