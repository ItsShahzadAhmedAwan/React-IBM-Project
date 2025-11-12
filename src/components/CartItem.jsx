import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  removeItem,
  increaseQty,
  decreaseQty,
} from '../redux/features/cart/cartSlice';
import { formatPrice } from '../utils/helpers';
import './CartItem.css';

function CartItem({ item }) {
  const dispatch = useDispatch();
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const handleRemove = () => {
    dispatch(removeItem(item.id));
    setShowDeleteConfirm(false);
  };

  const handleIncrease = () => {
    dispatch(increaseQty(item.id));
  };

  const handleDecrease = () => {
    if (item.quantity > 1) {
      dispatch(decreaseQty(item.id));
    }
  };

  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img
          src={item.imageUrl}
          alt={item.name}
          loading="lazy"
        />
      </div>

      <div className="cart-item-details">
        <h3 className="cart-item-name">{item.name}</h3>
        <p className="cart-item-price">Unit Price: {formatPrice(item.price)}</p>
      </div>

      <div className="cart-item-quantity">
        <button
          className="qty-btn"
          onClick={handleDecrease}
          disabled={item.quantity === 1}
          aria-label={`Decrease quantity of ${item.name}`}
        >
          −
        </button>
        <span className="qty-display">{item.quantity}</span>
        <button
          className="qty-btn"
          onClick={handleIncrease}
          aria-label={`Increase quantity of ${item.name}`}
        >
          +
        </button>
      </div>

      <div className="cart-item-subtotal">
        <span className="subtotal-label">Subtotal:</span>
        <span className="subtotal-price">{formatPrice(item.subtotal)}</span>
      </div>

      <div className="cart-item-actions">
        {!showDeleteConfirm ? (
          <button
            className="btn btn-danger btn-small"
            onClick={() => setShowDeleteConfirm(true)}
            aria-label={`Delete ${item.name} from cart`}
          >
            🗑️ Delete
          </button>
        ) : (
          <div className="delete-confirm">
            <p>Remove this item?</p>
            <div className="confirm-buttons">
              <button
                className="btn btn-danger btn-small"
                onClick={handleRemove}
              >
                Yes
              </button>
              <button
                className="btn btn-secondary btn-small"
                onClick={() => setShowDeleteConfirm(false)}
              >
                No
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartItem;
