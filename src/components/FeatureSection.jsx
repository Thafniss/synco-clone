import React from 'react';
import '../styles/FeatureSection.css';

export default function FeatureSection() {
  return (
    <section className="feature-section">
      <div className="container">
        <h2 className="feature-title">Our Features</h2>
        <div className="features-grid">
          <div className="feature-item">
            <h3>Feature One</h3>
            <p>Short description about feature one, explaining benefits and value.</p>
          </div>
          <div className="feature-item">
            <h3>Feature Two</h3>
            <p>Short description about feature two, highlighting what makes it unique.</p>
          </div>
          <div className="feature-item">
            <h3>Feature Three</h3>
            <p>Short description about feature three, focused on user experience.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
