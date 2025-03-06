// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Per navigare tra le pagine

const Home = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Welcome to Paradise Nursery!</h1>
      <p>Your go-to place for beautiful indoor plants.</p>
      <Link to="/products">
        <button style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
          Get Started
        </button>
      </Link>
    </div>
  );
};

export default Home;
