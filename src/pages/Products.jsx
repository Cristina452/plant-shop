import React from 'react';
import { Link } from 'react-router-dom'; // Per il link al carrello
import ProductCard from '../components/ProductCard'; // Per visualizzare i prodotti

const Products = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Our Products</h1>
      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        {/* Aloe Vera */}
        <div style={{ width: '200px', margin: '20px', textAlign: 'center' }}>
          <img src="/assets/images/aloe-vera.jpg" alt="Aloe Vera" style={{ width: '100%', height: 'auto' }} />
          <h2>Aloe Vera</h2>
          <p>$15</p>
          <p>Succulents</p>
          <button style={{ backgroundColor: '#4caf50', color: 'white', padding: '10px 20px', cursor: 'pointer' }}>Add to Cart</button>
        </div>

        {/* Snake Plant */}
        <div style={{ width: '200px', margin: '20px', textAlign: 'center' }}>
          <img src="/assets/images/snake-plant.jpg" alt="Snake Plant" style={{ width: '100%', height: 'auto' }} />
          <h2>Snake Plant</h2>
          <p>$20</p>
          <p>Succulents</p>
          <button style={{ backgroundColor: '#4caf50', color: 'white', padding: '10px 20px', cursor: 'pointer' }}>Add to Cart</button>
        </div>

        {/* Peace Lily */}
        <div style={{ width: '200px', margin: '20px', textAlign: 'center' }}>
          <img src="/assets/images/peace-lily.jpg" alt="Peace Lily" style={{ width: '100%', height: 'auto' }} />
          <h2>Peace Lily</h2>
          <p>$25</p>
          <p>Flowers</p>
          <button style={{ backgroundColor: '#4caf50', color: 'white', padding: '10px 20px', cursor: 'pointer' }}>Add to Cart</button>
        </div>

        {/* Spider Plant */}
        <div style={{ width: '200px', margin: '20px', textAlign: 'center' }}>
          <img src="/assets/images/spider-plant.jpg" alt="Spider Plant" style={{ width: '100%', height: 'auto' }} />
          <h2>Spider Plant</h2>
          <p>$18</p>
          <p>Succulents</p>
          <button style={{ backgroundColor: '#4caf50', color: 'white', padding: '10px 20px', cursor: 'pointer' }}>Add to Cart</button>
        </div>

        {/* Cactus */}
        <div style={{ width: '200px', margin: '20px', textAlign: 'center' }}>
          <img src="/assets/images/cactus.jpg" alt="Cactus" style={{ width: '100%', height: 'auto' }} />
          <h2>Cactus</h2>
          <p>$18</p>
          <p>Succulents</p>
          <button style={{ backgroundColor: '#4caf50', color: 'white', padding: '10px 20px', cursor: 'pointer' }}>Add to Cart</button>
        </div>

        {/* Fiddle Leaf Fig */}
        <div style={{ width: '200px', margin: '20px', textAlign: 'center' }}>
          <img src="/assets/images/fiddle-leaf-fig.jpg" alt="Fiddle Leaf Fig" style={{ width: '100%', height: 'auto' }} />
          <h2>Fiddle Leaf Fig</h2>
          <p>$30</p>
          <p>Trees</p>
          <button style={{ backgroundColor: '#4caf50', color: 'white', padding: '10px 20px', cursor: 'pointer' }}>Add to Cart</button>
        </div>

        {/* Monstera */}
        <div style={{ width: '200px', margin: '20px', textAlign: 'center' }}>
          <img src="/assets/images/monstera.jpg" alt="Monstera" style={{ width: '100%', height: 'auto' }} />
          <h2>Monstera</h2>
          <p>$35</p>
          <p>Tropical</p>
          <button style={{ backgroundColor: '#4caf50', color: 'white', padding: '10px 20px', cursor: 'pointer' }}>Add to Cart</button>
        </div>

      </div>
      <Link to="/cart">
        <button style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px' }}>
          Go to Cart
        </button>
      </Link>
    </div>
  );
};

export default Products;
