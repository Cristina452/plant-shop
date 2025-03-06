import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';  // Importa il Provider
import './index.css';
import App from './App';
import store from './redux/store.js';  // Importa lo store

// Renderizza l'app avvolgendola con il Provider
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>  {/* Avvolgi App con il Provider */}
      <App />
    </Provider>
  </React.StrictMode>
);

