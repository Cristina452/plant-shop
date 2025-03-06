// src/components/ProductCard.jsx
import React from 'react';

const ProductCard = ({ name, price, image, category }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', margin: '20px', textAlign: 'center', width: '200px' }}>
      <img src={image} alt={name} style={{ width: '100%', height: 'auto' }} />
      <h2>{name}</h2>
      <p>{category}</p>
      <p>${price}</p>
      <button
        style={{
          padding: '10px 20px',
          backgroundColor: '#28a745',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
