import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/features/cart/cartSlice';
import { formatPrice } from '../utils/helpers';
import './ProductCard.css';

function ProductCard({ product }) {
  const [isAdded, setIsAdded] = useState(false);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        imageUrl: product.imageUrl,
      })
    );

    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="product-image"
          loading="lazy"
        />
        {product.stock < 10 && (
          <div className="stock-warning">Low Stock</div>
        )}
      </div>

      <div className="product-content">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>

        <div className="product-footer">
          <div className="product-price">
            {formatPrice(product.price)}
          </div>
          <button
            className={`btn btn-primary add-to-cart-btn ${isAdded ? 'added' : ''}`}
            onClick={handleAddToCart}
            aria-label={`Add ${product.name} to cart`}
          >
            {isAdded ? '✓ Added' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
