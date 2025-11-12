import React from 'react';
import ProductList from '../components/ProductList';
import './Products.css';

function Products() {
  return (
    <main className="products-page">
      <div className="container">
        <section className="products-header">
          <h1>Our Plant Collection</h1>
          <p>
            Discover our carefully selected range of aromatic and medicinal plants
          </p>
        </section>

        <ProductList />
      </div>
    </main>
  );
}

export default Products;
