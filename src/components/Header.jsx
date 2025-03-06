import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const cartItems = useSelector(state => state.cart?.items || []);  // Aggiunto il controllo per evitare errori

  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">
          <div className="cart-icon">
            🛒
            {cartItems.length > 0 && <span>{cartItems.length}</span>}  {/* Visualizza il numero solo se ci sono articoli */}
          </div>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
