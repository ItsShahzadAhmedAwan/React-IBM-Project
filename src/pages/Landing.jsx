import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

function Landing() {
  return (
    <main className="landing-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            🌿 Welcome to Paradise Nursery
          </h1>
          <p className="hero-subtitle">
            Discover the finest collection of aromatic and medicinal plants for your home
          </p>
          <p className="hero-description">
            Bring nature into your life with our carefully curated selection of house plants.
            From calming aromatics to powerful medicinal herbs, find the perfect plant for you.
          </p>

          <div className="hero-features">
            <div className="feature-box">
              <span className="feature-icon">🌱</span>
              <h3>Premium Quality</h3>
              <p>Hand-selected plants in perfect condition</p>
            </div>

            <div className="feature-box">
              <span className="feature-icon">🚚</span>
              <h3>Fast Delivery</h3>
              <p>Quick and safe delivery to your doorstep</p>
            </div>

            <div className="feature-box">
              <span className="feature-icon">💚</span>
              <h3>Expert Care</h3>
              <p>Detailed care instructions for each plant</p>
            </div>
          </div>

          <Link to="/products" className="btn btn-primary hero-btn">
            Start Shopping 🛒
          </Link>
        </div>

        <div className="hero-image">
          <img
            src="https://images.pexels.com/photos/4503270/pexels-photo-4503270.jpeg?w=500&h=500&fit=crop"
            alt="Beautiful plant collection"
          />
        </div>
      </section>

      <section className="info-section">
        <h2>Why Choose Paradise Nursery?</h2>

        <div className="info-grid">
          <article className="info-card">
            <h3>🌿 Wide Selection</h3>
            <p>
              Explore our diverse range of aromatic and medicinal plants. Each plant is
              chosen for its quality and health benefits.
            </p>
          </article>

          <article className="info-card">
            <h3>📚 Knowledge Base</h3>
            <p>
              Learn how to care for your plants with our comprehensive guides and expert tips.
              Grow with confidence!
            </p>
          </article>

          <article className="info-card">
            <h3>♻️ Eco-Friendly</h3>
            <p>
              We're committed to sustainable practices. Our packaging is 100% recyclable
              and environmentally friendly.
            </p>
          </article>

          <article className="info-card">
            <h3>⭐ Customer Support</h3>
            <p>
              Have questions? Our dedicated support team is here to help you choose the
              perfect plant.
            </p>
          </article>
        </div>
      </section>

      <section className="call-to-action">
        <h2>Ready to Transform Your Space?</h2>
        <p>
          Start your plant journey today and discover the joy of gardening indoors.
        </p>
        <Link to="/products" className="btn btn-primary">
          Browse Our Collection
        </Link>
      </section>
    </main>
  );
}

export default Landing;
