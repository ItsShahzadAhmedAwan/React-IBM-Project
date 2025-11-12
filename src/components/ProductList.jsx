import React, { useState } from 'react';
import { getAllCategories, getPlantsByCategory } from '../data/plantsData';
import ProductCard from './ProductCard';
import './ProductList.css';

function ProductList() {
  const categories = getAllCategories();
  const [selectedCategory, setSelectedCategory] = useState(null);

  const displayCategories = selectedCategory
    ? [selectedCategory]
    : categories;

  return (
    <div className="product-list-container">
      <div className="filter-section">
        <h3>Filter by Category</h3>
        <button
          className={`category-btn ${selectedCategory === null ? 'active' : ''}`}
          onClick={() => setSelectedCategory(null)}
        >
          All Plants
        </button>
        {categories.map(category => (
          <button
            key={category}
            className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="products-section">
        {displayCategories.map(category => {
          const plants = getPlantsByCategory(category);
          return (
            <section key={category} className="category-section">
              <h2 className="category-title">{category}</h2>
              <p className="category-subtitle">
                {plants.length} product{plants.length !== 1 ? 's' : ''} available
              </p>
              <div className="products-grid">
                {plants.map(plant => (
                  <ProductCard key={plant.id} product={plant} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}

export default ProductList;
