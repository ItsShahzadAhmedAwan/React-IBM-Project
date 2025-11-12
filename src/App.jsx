import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Products from './pages/Products';
import Cart from './pages/Cart';
import { loadCart } from './redux/features/cart/cartSlice';
import './App.css';

function App() {
  const dispatch = useDispatch();

  // Load cart from localStorage on app mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        const cartData = JSON.parse(savedCart);
        dispatch(loadCart(cartData));
      } catch (error) {
        console.error('Failed to load cart from localStorage:', error);
      }
    }
  }, [dispatch]);

  // Save cart to localStorage whenever it changes
  const cartState = require('./redux/store').default.getState().cart;

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartState));
  }, [cartState]);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <footer className="app-footer">
        <div className="footer-content">
          <p>&copy; 2025 Paradise Nursery. All rights reserved.</p>
          <p>🌿 Bringing Nature Home Since 2025 🌿</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
