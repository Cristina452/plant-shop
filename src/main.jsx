
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Assicurati che il percorso sia corretto
import './styles.css'; // Importa i tuoi stili globali

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
