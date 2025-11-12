import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectTotalPrice,
  selectTotalQuantity,
} from '../redux/features/cart/cartSelectors';
import { clearCart } from '../redux/features/cart/cartSlice';
import { formatPrice } from '../utils/helpers';
import './CartSummary.css';

function CartSummary() {
  const totalPrice = useSelector(selectTotalPrice);
  const totalQuantity = useSelector(selectTotalQuantity);
  const dispatch = useDispatch();

  const handleCheckout = () => {
    if (totalQuantity > 0) {
      alert(
        `Thank you for your purchase!\n\nTotal Items: ${totalQuantity}\nTotal Amount: ${formatPrice(totalPrice)}\n\nYour order has been confirmed.`
      );
      dispatch(clearCart());
    }
  };

  return (
    <div className="cart-summary">
      <div className="summary-card">
        <h3>Order Summary</h3>

        <div className="summary-row">
          <span>Total Items:</span>
          <span className="summary-value">{totalQuantity}</span>
        </div>

        <div className="summary-row highlight">
          <span>Total Price:</span>
          <span className="summary-value highlight-value">
            {formatPrice(totalPrice)}
          </span>
        </div>

        <div className="summary-buttons">
          <Link to="/products" className="btn btn-secondary">
            ← Continue Shopping
          </Link>
          <button
            className="btn btn-primary"
            onClick={handleCheckout}
            disabled={totalQuantity === 0}
          >
            Checkout 🛍️
          </button>
        </div>

        {totalQuantity === 0 && (
          <p className="empty-notice">Your cart is empty</p>
        )}
      </div>
    </div>
  );
}

export default CartSummary;
