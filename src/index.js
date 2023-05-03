import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ProductProvider } from "./context/products.context"
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductProvider>
        <App />
      </ProductProvider>
    </BrowserRouter>
  </React.StrictMode>
);


