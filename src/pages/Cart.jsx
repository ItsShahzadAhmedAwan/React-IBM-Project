import React from 'react';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../redux/features/cart/cartSelectors';
import CartItem from '../components/CartItem';
import CartSummary from '../components/CartSummary';
import './Cart.css';

function Cart() {
  const cartItems = useSelector(selectCartItems);

  return (
    <main className="cart-page">
      <div className="container">
        <section className="cart-header">
          <h1>🛒 Shopping Cart</h1>
          <p>
            {cartItems.length === 0
              ? 'Your cart is empty'
              : `You have ${cartItems.length} item${cartItems.length !== 1 ? 's' : ''} in your cart`}
          </p>
        </section>

        {cartItems.length === 0 ? (
          <section className="empty-cart">
            <div className="empty-cart-content">
              <div className="empty-icon">🛍️</div>
              <h2>Your cart is empty</h2>
              <p>Start shopping to add plants to your cart!</p>
              <a href="/products" className="btn btn-primary">
                Continue Shopping
              </a>
            </div>
          </section>
        ) : (
          <div className="cart-layout">
            <div className="cart-items-section">
              <h2>Cart Items</h2>
              <div className="cart-items-list">
                {cartItems.map(item => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>
            </div>

            <CartSummary />
          </div>
        )}
      </div>
    </main>
  );
}

export default Cart;
